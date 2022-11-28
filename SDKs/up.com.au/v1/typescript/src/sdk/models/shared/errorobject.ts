import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorObjectSource
/** 
 * If applicable, location in the request that this error relates to. This
 * may be a parameter in the query string, or a an attribute in the
 * request body.
 * 
**/
export class ErrorObjectSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=pointer" })
  pointer?: string;
}


// ErrorObject
/** 
 * Provides information about an error processing a request.
 * 
**/
export class ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ErrorObjectSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
