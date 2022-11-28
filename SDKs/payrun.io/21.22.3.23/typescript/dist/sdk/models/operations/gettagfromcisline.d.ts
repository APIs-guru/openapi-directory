import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagFromCisLinePathParams extends SpeakeasyBase {
    cisLineId: string;
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class GetTagFromCisLineHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromCisLineRequest extends SpeakeasyBase {
    pathParams: GetTagFromCisLinePathParams;
    headers: GetTagFromCisLineHeaders;
}
export declare class GetTagFromCisLineResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
