import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SandboxItemResetLoginRequest defines the request schema for `/sandbox/item/reset_login`
**/
export declare class SandboxItemResetLoginRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    secret?: string;
}
