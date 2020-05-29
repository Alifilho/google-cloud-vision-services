import { Segments, Joi } from "celebrate";

const base64Schema = {
  [Segments.BODY]: Joi.object().keys({
    key: Joi.string().required(),
    email: Joi.string().email().required(),
    base64: Joi.binary().encoding("base64").required(),
  }),
  [Segments.HEADERS]: Joi.object({
    type: Joi.string().min(13).max(21).required(),
  }),
};

export default base64Schema;
