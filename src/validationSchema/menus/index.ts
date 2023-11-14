import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().integer().required(),
  category: yup.string().required(),
  availability: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
});
