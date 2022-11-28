import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromSubContractorPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
}
export declare class GetTagsFromSubContractorHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromSubContractorRequest extends SpeakeasyBase {
    pathParams: GetTagsFromSubContractorPathParams;
    headers: GetTagsFromSubContractorHeaders;
}
export declare class GetTagsFromSubContractorResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
