import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTransactionsIdRequest extends SpeakeasyBase {
    pathParams: GetTransactionsIdPathParams;
}
export declare class GetTransactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    getTransactionResponse?: shared.GetTransactionResponse;
    statusCode: number;
}
