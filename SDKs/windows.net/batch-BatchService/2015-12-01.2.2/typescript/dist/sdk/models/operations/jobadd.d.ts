import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobAddQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class JobAddHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobAddRequest extends SpeakeasyBase {
    queryParams: JobAddQueryParams;
    headers: JobAddHeaders;
    request: any;
}
export declare class JobAddResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
