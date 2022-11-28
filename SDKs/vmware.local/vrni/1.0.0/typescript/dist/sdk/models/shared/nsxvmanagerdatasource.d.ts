import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordCredentials } from "./passwordcredentials";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
export declare class NsxvManagerDataSource extends SpeakeasyBase {
    centralCliEnabled?: boolean;
    credentials?: PasswordCredentials;
    enabled?: boolean;
    entityId?: string;
    entityType?: DataSourceTypeEnum;
    fqdn?: string;
    ip?: string;
    ipfixEnabled?: boolean;
    nickname?: string;
    notes?: string;
    proxyId?: string;
    vcenterId?: string;
}
