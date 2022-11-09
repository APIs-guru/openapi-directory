import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BankTransferListRequest extends SpeakeasyBase {
    request: shared.BankTransferListRequest;
}
export declare class BankTransferListResponse extends SpeakeasyBase {
    bankTransferListResponse?: Map<string, any>;
    contentType: string;
    error?: Map<string, any>;
    statusCode: number;
}
