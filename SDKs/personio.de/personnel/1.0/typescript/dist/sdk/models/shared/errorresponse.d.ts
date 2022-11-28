import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorResponseError extends SpeakeasyBase {
    code?: number;
    message?: string;
}
export declare class ErrorResponse extends SpeakeasyBase {
    error: ErrorResponseError;
    success: boolean;
}
