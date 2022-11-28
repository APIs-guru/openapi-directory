import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";



export class ApiError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=details", elemType: ErrorDetail })
  details?: ErrorDetail[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
