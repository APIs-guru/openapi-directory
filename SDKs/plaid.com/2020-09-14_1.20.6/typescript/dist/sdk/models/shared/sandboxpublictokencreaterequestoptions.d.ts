import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SandboxPublicTokenCreateRequestOptionsTransactions } from "./sandboxpublictokencreaterequestoptionstransactions";
/**
 * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
**/
export declare class SandboxPublicTokenCreateRequestOptions extends SpeakeasyBase {
    overridePassword?: string;
    overrideUsername?: string;
    transactions?: SandboxPublicTokenCreateRequestOptionsTransactions;
    webhook?: string;
}
