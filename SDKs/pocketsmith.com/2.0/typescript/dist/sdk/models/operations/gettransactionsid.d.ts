import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetTransactionsIdRequest extends SpeakeasyBase {
    pathParams: GetTransactionsIdPathParams;
}
export declare class GetTransactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    transaction?: shared.Transaction;
}
