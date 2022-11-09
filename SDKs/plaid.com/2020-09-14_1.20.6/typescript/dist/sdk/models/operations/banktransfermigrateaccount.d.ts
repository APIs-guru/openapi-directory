import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BankTransferMigrateAccountRequest extends SpeakeasyBase {
    request: shared.BankTransferMigrateAccountRequest;
}
export declare class BankTransferMigrateAccountResponse extends SpeakeasyBase {
    bankTransferMigrateAccountResponse?: Map<string, any>;
    contentType: string;
    error?: Map<string, any>;
    statusCode: number;
}
