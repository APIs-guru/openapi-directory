import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// ErrorOptions
/** 
 * The error option model
**/
export class ErrorOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;
}


// Error
/** 
 * The error model
**/
export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=options", elemType: shared.ErrorOptions })
  options?: ErrorOptions[];

  @Metadata({ data: "json, name=path" })
  path?: string;
}
