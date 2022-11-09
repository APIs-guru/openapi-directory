import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagFromSubContractorRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class GetTagFromSubContractorRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromSubContractorRevisionRequest extends SpeakeasyBase {
    pathParams: GetTagFromSubContractorRevisionPathParams;
    headers: GetTagFromSubContractorRevisionHeaders;
}
export declare class GetTagFromSubContractorRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
