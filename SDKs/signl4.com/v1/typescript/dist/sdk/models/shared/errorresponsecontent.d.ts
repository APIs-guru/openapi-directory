import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorResponseContentBase } from "./errorresponsecontentbase";
export declare class ErrorResponseContent extends SpeakeasyBase {
    code?: number;
    details?: string;
    errors?: ErrorResponseContentBase[];
    message?: string;
    requestId?: string;
}
