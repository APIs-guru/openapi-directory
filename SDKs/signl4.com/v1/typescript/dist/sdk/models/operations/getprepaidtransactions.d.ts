import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPrepaidTransactionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    prepaidTransactionInfos?: shared.PrepaidTransactionInfo[];
    statusCode: number;
}
