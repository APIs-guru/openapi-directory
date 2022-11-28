import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTransactionsTransactionIdRelationshipsTagsPathParams extends SpeakeasyBase {
    transactionId: string;
}
export declare class PostTransactionsTransactionIdRelationshipsTagsRequest extends SpeakeasyBase {
    pathParams: PostTransactionsTransactionIdRelationshipsTagsPathParams;
    request?: shared.UpdateTransactionTagsRequest;
}
export declare class PostTransactionsTransactionIdRelationshipsTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
