import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Exception } from "./exception";
import { ValidationError } from "./validationerror";



export class ApiException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InnerException" })
  innerException?: any;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=StackTrace" })
  stackTrace?: string;

  @SpeakeasyMetadata({ data: "json, name=customError" })
  customError?: any;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ValidationError })
  errors?: ValidationError[];

  @SpeakeasyMetadata({ data: "json, name=isCustomErrorObject" })
  isCustomErrorObject?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isModelValidatonError" })
  isModelValidatonError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=referenceDocumentLink" })
  referenceDocumentLink?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceErrorCode" })
  referenceErrorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
