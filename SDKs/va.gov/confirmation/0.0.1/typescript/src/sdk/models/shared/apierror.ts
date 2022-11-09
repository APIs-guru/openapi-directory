import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiErrorErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


// ApiError
/** 
 * API invocation or processing error
**/
export class ApiError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ApiErrorErrors })
  errors?: ApiErrorErrors[];
}
