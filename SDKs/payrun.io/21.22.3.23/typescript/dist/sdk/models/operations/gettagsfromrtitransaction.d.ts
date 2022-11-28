import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromRtiTransactionPathParams extends SpeakeasyBase {
    employerId: string;
    rtiTransactionId: string;
}
export declare class GetTagsFromRtiTransactionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromRtiTransactionRequest extends SpeakeasyBase {
    pathParams: GetTagsFromRtiTransactionPathParams;
    headers: GetTagsFromRtiTransactionHeaders;
}
export declare class GetTagsFromRtiTransactionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
