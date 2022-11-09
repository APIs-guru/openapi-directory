import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorDetail } from "./errordetail";


export class ApiError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=details", elemType: shared.ErrorDetail })
  details?: ErrorDetail[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}
