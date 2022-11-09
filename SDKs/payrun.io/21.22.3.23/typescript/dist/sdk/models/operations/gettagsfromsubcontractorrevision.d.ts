import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagsFromSubContractorRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    subContractorId: string;
}
export declare class GetTagsFromSubContractorRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromSubContractorRevisionRequest extends SpeakeasyBase {
    pathParams: GetTagsFromSubContractorRevisionPathParams;
    headers: GetTagsFromSubContractorRevisionHeaders;
}
export declare class GetTagsFromSubContractorRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
