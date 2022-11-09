import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorResponseError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ErrorResponseError;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
