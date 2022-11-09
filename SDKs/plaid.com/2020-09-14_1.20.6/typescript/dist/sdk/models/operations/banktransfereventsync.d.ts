import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BankTransferEventSyncRequest extends SpeakeasyBase {
    request: shared.BankTransferEventSyncRequest;
}
export declare class BankTransferEventSyncResponse extends SpeakeasyBase {
    bankTransferEventSyncResponse?: Map<string, any>;
    contentType: string;
    error?: Map<string, any>;
    statusCode: number;
}
