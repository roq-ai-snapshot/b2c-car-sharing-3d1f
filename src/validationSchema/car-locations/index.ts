import * as yup from 'yup';

export const carLocationValidationSchema = yup.object().shape({
  car_id: yup.string().nullable().required(),
  location_id: yup.string().nullable().required(),
});
