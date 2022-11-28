import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
/**
 * Error response returned by all error conditions in Velo Services
**/
export declare class ErrorResponse extends SpeakeasyBase {
    correlationId?: string;
    errors?: Error[];
    httpStatusCode?: number;
}
