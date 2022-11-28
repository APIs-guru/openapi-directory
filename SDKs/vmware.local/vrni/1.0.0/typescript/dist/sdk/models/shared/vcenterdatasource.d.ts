import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordCredentials } from "./passwordcredentials";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
export declare class VCenterDataSource extends SpeakeasyBase {
    credentials?: PasswordCredentials;
    enabled?: boolean;
    entityId?: string;
    entityType?: DataSourceTypeEnum;
    fqdn?: string;
    ip?: string;
    nickname?: string;
    notes?: string;
    proxyId?: string;
}
