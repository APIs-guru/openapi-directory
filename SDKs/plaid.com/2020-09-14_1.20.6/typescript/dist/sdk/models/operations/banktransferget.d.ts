import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BankTransferGetRequest extends SpeakeasyBase {
    request: shared.BankTransferGetRequest;
}
export declare class BankTransferGetResponse extends SpeakeasyBase {
    bankTransferGetResponse?: Map<string, any>;
    contentType: string;
    error?: Map<string, any>;
    statusCode: number;
}
