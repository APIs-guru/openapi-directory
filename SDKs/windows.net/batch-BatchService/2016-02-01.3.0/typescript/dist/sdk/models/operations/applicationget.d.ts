import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ApplicationGetPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class ApplicationGetQueryParams extends SpeakeasyBase {
    apiVersion: string;
    timeout?: number;
}
export declare class ApplicationGetHeaders extends SpeakeasyBase {
    clientRequestId?: string;
    ocpDate?: string;
    returnClientRequestId?: boolean;
}
export declare class ApplicationGetRequest extends SpeakeasyBase {
    pathParams: ApplicationGetPathParams;
    queryParams: ApplicationGetQueryParams;
    headers: ApplicationGetHeaders;
}
export declare class ApplicationGetResponse extends SpeakeasyBase {
    applicationSummary?: any;
    batchError?: any;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
