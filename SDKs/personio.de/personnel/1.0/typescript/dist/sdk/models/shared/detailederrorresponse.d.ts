import { SpeakeasyBase } from "../../../internal/utils";
export declare class DetailedErrorResponseErrorDetailedMessage extends SpeakeasyBase {
    break?: number;
    comment?: string;
    date?: string;
    employee?: number;
    endTime?: string;
    errorMsg?: string;
    id?: number;
    startTime?: string;
    success?: boolean;
}
export declare class DetailedErrorResponseError extends SpeakeasyBase {
    code?: number;
    detailedMessage?: DetailedErrorResponseErrorDetailedMessage[];
    message?: string;
}
export declare class DetailedErrorResponse extends SpeakeasyBase {
    error: DetailedErrorResponseError;
    success: boolean;
}
