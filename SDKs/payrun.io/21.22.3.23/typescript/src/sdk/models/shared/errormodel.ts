import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ErrorModelErrorModelErrorCategoryEnum {
    General = "General",
    NotFound = "NotFound",
    NotAuthorised = "NotAuthorised",
    ValidationFailure = "ValidationFailure"
}


// ErrorModelErrorModelErrors
/** 
 * The error models' errors
**/
export class ErrorModelErrorModelErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string[];
}


export class ErrorModelErrorModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorCategory" })
  errorCategory?: ErrorModelErrorModelErrorCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=Errors" })
  errors?: ErrorModelErrorModelErrors;
}


export class ErrorModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorModel" })
  errorModel?: ErrorModelErrorModel;
}
