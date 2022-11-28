import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiErrorErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    status?: string;
    title?: string;
}
/**
 * API invocation or processing error
**/
export declare class ApiError extends SpeakeasyBase {
    errors?: ApiErrorErrors[];
}
