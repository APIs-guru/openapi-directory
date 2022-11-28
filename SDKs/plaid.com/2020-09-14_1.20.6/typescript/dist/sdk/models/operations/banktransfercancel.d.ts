import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankTransferCancelRequest extends SpeakeasyBase {
    request: shared.BankTransferCancelRequest;
}
export declare class BankTransferCancelResponse extends SpeakeasyBase {
    bankTransferCancelResponse?: Map<string, any>;
    contentType: string;
    error?: Map<string, any>;
    statusCode: number;
}
