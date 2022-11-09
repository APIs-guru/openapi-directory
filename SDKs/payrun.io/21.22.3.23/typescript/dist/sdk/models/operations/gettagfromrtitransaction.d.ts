import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagFromRtiTransactionPathParams extends SpeakeasyBase {
    employerId: string;
    rtiTransactionId: string;
    tagId: string;
}
export declare class GetTagFromRtiTransactionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromRtiTransactionRequest extends SpeakeasyBase {
    pathParams: GetTagFromRtiTransactionPathParams;
    headers: GetTagFromRtiTransactionHeaders;
}
export declare class GetTagFromRtiTransactionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
