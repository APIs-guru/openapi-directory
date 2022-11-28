import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubContractorRevisionsPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class GetSubContractorRevisionsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetSubContractorRevisionsRequest extends SpeakeasyBase {
    pathParams: GetSubContractorRevisionsPathParams;
    headers: GetSubContractorRevisionsHeaders;
}
export declare class GetSubContractorRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
