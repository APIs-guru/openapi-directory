import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagsFromCisLinePathParams extends SpeakeasyBase {
    cisLineId: string;
    employerId: string;
    subContractorId: string;
}
export declare class GetTagsFromCisLineHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromCisLineRequest extends SpeakeasyBase {
    pathParams: GetTagsFromCisLinePathParams;
    headers: GetTagsFromCisLineHeaders;
}
export declare class GetTagsFromCisLineResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
