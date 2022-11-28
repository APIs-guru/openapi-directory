import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorOptions
/** 
 * The error option model
**/
export class ErrorOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}


// Error
/** 
 * The error model
**/
export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: ErrorOptions })
  options?: ErrorOptions[];

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
