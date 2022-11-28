import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ErrorModelErrorModelErrorCategoryEnum {
    General = "General",
    NotFound = "NotFound",
    NotAuthorised = "NotAuthorised",
    ValidationFailure = "ValidationFailure"
}
/**
 * The error models' errors
**/
export declare class ErrorModelErrorModelErrors extends SpeakeasyBase {
    error?: string[];
}
export declare class ErrorModelErrorModel extends SpeakeasyBase {
    description?: string;
    errorCategory?: ErrorModelErrorModelErrorCategoryEnum;
    errors?: ErrorModelErrorModelErrors;
}
export declare class ErrorModel extends SpeakeasyBase {
    errorModel?: ErrorModelErrorModel;
}
