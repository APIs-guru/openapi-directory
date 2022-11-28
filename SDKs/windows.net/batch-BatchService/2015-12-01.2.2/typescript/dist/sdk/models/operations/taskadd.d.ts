import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaskAddPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class TaskAddQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class TaskAddHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class TaskAddRequest extends SpeakeasyBase {
    pathParams: TaskAddPathParams;
    queryParams: TaskAddQueryParams;
    headers: TaskAddHeaders;
    request: any;
}
export declare class TaskAddResponse extends SpeakeasyBase {
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
