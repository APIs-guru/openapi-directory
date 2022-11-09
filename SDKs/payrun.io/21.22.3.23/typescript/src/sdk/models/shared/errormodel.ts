import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ErrorModelErrorModelErrorCategoryEnum {
    General = "General"
,    NotFound = "NotFound"
,    NotAuthorised = "NotAuthorised"
,    ValidationFailure = "ValidationFailure"
}


// ErrorModelErrorModelErrors
/** 
 * The error models' errors
**/
export class ErrorModelErrorModelErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: string[];
}


export class ErrorModelErrorModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ErrorCategory" })
  errorCategory?: ErrorModelErrorModelErrorCategoryEnum;

  @Metadata({ data: "json, name=Errors" })
  errors?: ErrorModelErrorModelErrors;
}


export class ErrorModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorModel" })
  errorModel?: ErrorModelErrorModel;
}
