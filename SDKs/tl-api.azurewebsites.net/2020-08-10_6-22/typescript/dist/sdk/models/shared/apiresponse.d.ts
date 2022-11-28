import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiResponse extends SpeakeasyBase {
    isError?: boolean;
    message?: string;
    responseException?: any;
    result?: any;
    statusCode?: number;
    version?: string;
}
