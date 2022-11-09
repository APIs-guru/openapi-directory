import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAllCisLineTagsPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class GetAllCisLineTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllCisLineTagsRequest extends SpeakeasyBase {
    pathParams: GetAllCisLineTagsPathParams;
    headers: GetAllCisLineTagsHeaders;
}
export declare class GetAllCisLineTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
