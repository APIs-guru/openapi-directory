import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayCodeRevisionsPathParams extends SpeakeasyBase {
    employerId: string;
    payCodeId: string;
}
export declare class GetPayCodeRevisionsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayCodeRevisionsRequest extends SpeakeasyBase {
    pathParams: GetPayCodeRevisionsPathParams;
    headers: GetPayCodeRevisionsHeaders;
}
export declare class GetPayCodeRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
