import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployerRevisionsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetEmployerRevisionsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployerRevisionsRequest extends SpeakeasyBase {
    pathParams: GetEmployerRevisionsPathParams;
    headers: GetEmployerRevisionsHeaders;
}
export declare class GetEmployerRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
