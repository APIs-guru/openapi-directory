import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorObjectSource
/** 
 * If applicable, location in the request that this error relates to. This
 * may be a parameter in the query string, or a an attribute in the
 * request body.
 * 
**/
export class ErrorObjectSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameter" })
  parameter?: string;

  @Metadata({ data: "json, name=pointer" })
  pointer?: string;
}


// ErrorObject
/** 
 * Provides information about an error processing a request.
 * 
**/
export class ErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=source" })
  source?: ErrorObjectSource;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}
