import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetail } from "./errordetail";


export class ErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error: ErrorDetail;
}
