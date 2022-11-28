import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankTransferEventListRequest extends SpeakeasyBase {
    request: shared.BankTransferEventListRequest;
}
export declare class BankTransferEventListResponse extends SpeakeasyBase {
    bankTransferEventListResponse?: Map<string, any>;
    contentType: string;
    error?: Map<string, any>;
    statusCode: number;
}
