import * as yup from 'yup';

export const locationValidationSchema = yup.object().shape({
  latitude: yup.string().required(),
  longitude: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip_code: yup.string().required(),
});
