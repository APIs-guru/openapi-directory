import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";
/**
 * API invocation or processing error
**/
export declare class ApiError extends SpeakeasyBase {
    errors: ErrorMessage[];
}
