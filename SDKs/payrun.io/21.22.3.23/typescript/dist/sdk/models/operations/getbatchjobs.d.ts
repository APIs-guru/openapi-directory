import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBatchJobsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetBatchJobsRequest extends SpeakeasyBase {
    headers: GetBatchJobsHeaders;
}
export declare class GetBatchJobsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
