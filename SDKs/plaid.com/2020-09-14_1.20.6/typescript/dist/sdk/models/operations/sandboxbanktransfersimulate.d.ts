import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SandboxBankTransferSimulateRequest extends SpeakeasyBase {
    request: shared.SandboxBankTransferSimulateRequest;
}
export declare class SandboxBankTransferSimulateResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    sandboxBankTransferSimulateResponse?: Map<string, any>;
    statusCode: number;
}
