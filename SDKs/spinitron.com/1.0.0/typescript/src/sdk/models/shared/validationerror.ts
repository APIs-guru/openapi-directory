import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ValidationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
