import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";
export declare class ApiException extends SpeakeasyBase {
    innerException?: any;
    message?: string;
    source?: string;
    stackTrace?: string;
    customError?: any;
    errors?: ValidationError[];
    isCustomErrorObject?: boolean;
    isModelValidatonError?: boolean;
    referenceDocumentLink?: string;
    referenceErrorCode?: string;
    statusCode?: number;
}
