import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagFromSubContractorPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class GetTagFromSubContractorHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromSubContractorRequest extends SpeakeasyBase {
    pathParams: GetTagFromSubContractorPathParams;
    headers: GetTagFromSubContractorHeaders;
}
export declare class GetTagFromSubContractorResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
