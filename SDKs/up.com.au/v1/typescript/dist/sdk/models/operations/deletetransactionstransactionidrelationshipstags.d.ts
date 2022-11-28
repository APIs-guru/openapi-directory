import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTransactionsTransactionIdRelationshipsTagsPathParams extends SpeakeasyBase {
    transactionId: string;
}
export declare class DeleteTransactionsTransactionIdRelationshipsTagsRequest extends SpeakeasyBase {
    pathParams: DeleteTransactionsTransactionIdRelationshipsTagsPathParams;
    request?: shared.UpdateTransactionTagsRequest;
}
export declare class DeleteTransactionsTransactionIdRelationshipsTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
