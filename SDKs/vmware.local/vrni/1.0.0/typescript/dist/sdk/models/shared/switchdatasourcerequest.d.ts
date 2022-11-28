import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordCredentials } from "./passwordcredentials";
export declare class SwitchDataSourceRequest extends SpeakeasyBase {
    credentials?: PasswordCredentials;
    enabled?: boolean;
    fqdn?: string;
    ip?: string;
    nickname: string;
    notes?: string;
    proxyId: string;
}
