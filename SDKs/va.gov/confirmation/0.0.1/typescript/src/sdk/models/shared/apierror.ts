import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiErrorErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// ApiError
/** 
 * API invocation or processing error
**/
export class ApiError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ApiErrorErrors })
  errors?: ApiErrorErrors[];
}
