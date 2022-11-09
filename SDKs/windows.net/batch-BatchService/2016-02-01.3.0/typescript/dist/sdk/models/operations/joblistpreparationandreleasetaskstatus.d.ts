import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class JobListPreparationAndReleaseTaskStatusPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class JobListPreparationAndReleaseTaskStatusQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    dollarSelect?: string;
    apiVersion: string;
    maxresults?: number;
    timeout?: number;
}
export declare class JobListPreparationAndReleaseTaskStatusHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class JobListPreparationAndReleaseTaskStatusRequest extends SpeakeasyBase {
    pathParams: JobListPreparationAndReleaseTaskStatusPathParams;
    queryParams: JobListPreparationAndReleaseTaskStatusQueryParams;
    headers: JobListPreparationAndReleaseTaskStatusHeaders;
}
export declare class JobListPreparationAndReleaseTaskStatusResponse extends SpeakeasyBase {
    batchError?: any;
    cloudJobListPreparationAndReleaseTaskStatusResult?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
