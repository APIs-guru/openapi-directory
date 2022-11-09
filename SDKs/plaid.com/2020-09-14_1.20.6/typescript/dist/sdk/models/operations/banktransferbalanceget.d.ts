import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BankTransferBalanceGetRequest extends SpeakeasyBase {
    request: shared.BankTransferBalanceGetRequest;
}
export declare class BankTransferBalanceGetResponse extends SpeakeasyBase {
    bankTransferBalanceGetResponse?: Map<string, any>;
    contentType: string;
    error?: Map<string, any>;
    statusCode: number;
}
