import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordCredentials } from "./passwordcredentials";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
import { DellSwitchTypeEnum } from "./dellswitchtypeenum";
export declare class DellSwitchDataSource extends SpeakeasyBase {
    credentials?: PasswordCredentials;
    enabled?: boolean;
    entityId?: string;
    entityType?: DataSourceTypeEnum;
    fqdn?: string;
    ip?: string;
    nickname?: string;
    notes?: string;
    proxyId?: string;
    switchType?: DellSwitchTypeEnum;
}
