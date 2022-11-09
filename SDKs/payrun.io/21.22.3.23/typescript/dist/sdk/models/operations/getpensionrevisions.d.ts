import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPensionRevisionsPathParams extends SpeakeasyBase {
    employerId: string;
    pensionId: string;
}
export declare class GetPensionRevisionsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPensionRevisionsRequest extends SpeakeasyBase {
    pathParams: GetPensionRevisionsPathParams;
    headers: GetPensionRevisionsHeaders;
}
export declare class GetPensionRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
