import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvestmentsTransactionsGetRequest extends SpeakeasyBase {
    request: shared.InvestmentsTransactionsGetRequest;
}
export declare class InvestmentsTransactionsGetResponse extends SpeakeasyBase {
    contentType: string;
    investmentsTransactionsGetResponse?: Map<string, any>;
    statusCode: number;
}
