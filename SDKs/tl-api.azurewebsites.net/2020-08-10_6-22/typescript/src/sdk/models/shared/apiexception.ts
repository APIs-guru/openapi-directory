import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Exception } from "./exception";
import { ValidationError } from "./validationerror";


export class ApiException extends SpeakeasyBase {
  @Metadata({ data: "json, name=InnerException" })
  innerException?: any;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Source" })
  source?: string;

  @Metadata({ data: "json, name=StackTrace" })
  stackTrace?: string;

  @Metadata({ data: "json, name=customError" })
  customError?: any;

  @Metadata({ data: "json, name=errors", elemType: shared.ValidationError })
  errors?: ValidationError[];

  @Metadata({ data: "json, name=isCustomErrorObject" })
  isCustomErrorObject?: boolean;

  @Metadata({ data: "json, name=isModelValidatonError" })
  isModelValidatonError?: boolean;

  @Metadata({ data: "json, name=referenceDocumentLink" })
  referenceDocumentLink?: string;

  @Metadata({ data: "json, name=referenceErrorCode" })
  referenceErrorCode?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
