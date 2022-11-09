import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorResponseContentBase extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
