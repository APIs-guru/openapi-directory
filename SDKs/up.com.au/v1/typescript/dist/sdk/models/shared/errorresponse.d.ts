import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorObject } from "./errorobject";
/**
 * Generic error response that returns one or more errors.
 *
**/
export declare class ErrorResponse extends SpeakeasyBase {
    errors: ErrorObject[];
}
