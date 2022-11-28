import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordCredentials } from "./passwordcredentials";
import { DellSwitchTypeEnum } from "./dellswitchtypeenum";
export declare class DellSwitchDataSourceRequest extends SpeakeasyBase {
    credentials?: PasswordCredentials;
    enabled?: boolean;
    fqdn?: string;
    ip?: string;
    nickname: string;
    notes?: string;
    proxyId: string;
    switchType?: DellSwitchTypeEnum;
}
