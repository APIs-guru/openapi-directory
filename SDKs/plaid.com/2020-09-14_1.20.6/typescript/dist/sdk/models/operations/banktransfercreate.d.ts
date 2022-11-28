import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankTransferCreateRequest extends SpeakeasyBase {
    request: shared.BankTransferCreateRequest;
}
export declare class BankTransferCreateResponse extends SpeakeasyBase {
    bankTransferCreateResponse?: Map<string, any>;
    contentType: string;
    error?: Map<string, any>;
    statusCode: number;
}
