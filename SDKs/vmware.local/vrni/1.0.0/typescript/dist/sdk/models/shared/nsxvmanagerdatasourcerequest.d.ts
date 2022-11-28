import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordCredentials } from "./passwordcredentials";
export declare class NsxvManagerDataSourceRequest extends SpeakeasyBase {
    centralCliEnabled?: boolean;
    credentials: PasswordCredentials;
    enabled?: boolean;
    fqdn?: string;
    ip?: string;
    ipfixEnabled?: boolean;
    nickname: string;
    notes?: string;
    proxyId: string;
    vcenterId: string;
}
