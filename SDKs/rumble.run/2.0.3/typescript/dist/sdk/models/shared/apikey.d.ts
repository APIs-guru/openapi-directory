import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ApiKey extends SpeakeasyBase {
    clientId?: string;
    comment?: string;
    counter?: number;
    createdAt?: number;
    createdBy?: string;
    id: string;
    inactive?: boolean;
    lastUsedAt?: number;
    lastUsedIp?: string;
    lastUsedUa?: string;
    organizationId?: string;
    token?: string;
    type?: string;
    usageLimit?: number;
    usageToday?: number;
}
