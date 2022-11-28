import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error: ErrorResponseError;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
