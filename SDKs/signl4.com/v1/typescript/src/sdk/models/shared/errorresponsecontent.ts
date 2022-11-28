import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorResponseContentBase } from "./errorresponsecontentbase";



export class ErrorResponseContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorResponseContentBase })
  errors?: ErrorResponseContentBase[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
