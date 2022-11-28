import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
export declare class ApiError extends SpeakeasyBase {
    code?: number;
    details?: ErrorDetail[];
    message?: string;
}
