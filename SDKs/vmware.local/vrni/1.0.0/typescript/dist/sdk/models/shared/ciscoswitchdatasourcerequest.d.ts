import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordCredentials } from "./passwordcredentials";
import { CiscoSwitchTypeEnum } from "./ciscoswitchtypeenum";
export declare class CiscoSwitchDataSourceRequest extends SpeakeasyBase {
    credentials?: PasswordCredentials;
    enabled?: boolean;
    fqdn?: string;
    ip?: string;
    nickname: string;
    notes?: string;
    proxyId: string;
    switchType?: CiscoSwitchTypeEnum;
}
