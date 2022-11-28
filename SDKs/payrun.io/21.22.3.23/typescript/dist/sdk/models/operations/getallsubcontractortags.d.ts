import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllSubContractorTagsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetAllSubContractorTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllSubContractorTagsRequest extends SpeakeasyBase {
    pathParams: GetAllSubContractorTagsPathParams;
    headers: GetAllSubContractorTagsHeaders;
}
export declare class GetAllSubContractorTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
