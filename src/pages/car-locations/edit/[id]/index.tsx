import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useCarLocationFindFirst } from 'lib/roq';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { carLocationValidationSchema } from 'validationSchema/car-locations';
import { CarLocationInterface } from 'interfaces/car-location';
import { CarInterface } from 'interfaces/car';
import { LocationInterface } from 'interfaces/location';

function CarLocationEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'car_location',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useCarLocationFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: CarLocationInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.car_location.update({
        data: values as any,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/car-locations');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<CarLocationInterface>({
    initialValues: data,
    validationSchema: carLocationValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Car Locations',
              link: '/car-locations',
            },
            {
              label: 'Update Car Location',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Car Location
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <AsyncSelect<CarInterface>
            formik={formik}
            name={'car_id'}
            label={'Select Car'}
            placeholder={'Select Car'}
            fetcher={() => roqClient.car.findManyWithCount({})}
            labelField={'make'}
          />
          <AsyncSelect<LocationInterface>
            formik={formik}
            name={'location_id'}
            label={'Select Location'}
            placeholder={'Select Location'}
            fetcher={() => roqClient.location.findManyWithCount({})}
            labelField={'latitude'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/car-locations')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'car_location',
    operation: AccessOperationEnum.UPDATE,
  }),
)(CarLocationEditPage);
