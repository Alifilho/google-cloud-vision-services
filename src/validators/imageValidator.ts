import { Segments, Joi } from "celebrate";

const imageSchema = {
  [Segments.BODY]: Joi.object().keys({
    key: Joi.string().required(),
    email: Joi.string().email().required(),
  }),
  [Segments.HEADERS]: Joi.object({
    type: Joi.string().min(13).max(21).required(),
  }),
};

export default imageSchema;
