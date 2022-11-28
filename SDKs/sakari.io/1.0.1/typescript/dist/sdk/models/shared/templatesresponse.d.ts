import { SpeakeasyBase } from "../../../internal/utils";
import { Template } from "./template";
export declare class TemplatesResponseError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class TemplatesResponsePagination extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    totalCount?: number;
}
export declare class TemplatesResponse extends SpeakeasyBase {
    data?: Template[];
    error?: TemplatesResponseError;
    pagination?: TemplatesResponsePagination;
    success?: boolean;
}
