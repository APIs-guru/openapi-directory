import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCisJobsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisJobsRequest extends SpeakeasyBase {
    headers: GetCisJobsHeaders;
}
export declare class GetCisJobsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
