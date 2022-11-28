import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventOpRsPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventOpRsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventOpRsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventOpRsRequest extends SpeakeasyBase {
    pathParams: GetEventOpRsPathParams;
    headers: GetEventOpRsHeaders;
    security: GetEventOpRsSecurity;
}
export declare class GetEventOpRsResponse extends SpeakeasyBase {
    contentType: string;
    eventOpRs?: shared.EventOpRs;
    headers: Map<string, string[]>;
    statusCode: number;
}
