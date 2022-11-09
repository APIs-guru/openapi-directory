import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Agent extends SpeakeasyBase {
    arch?: string;
    clientId?: string;
    connected?: boolean;
    createdAt?: number;
    deactivatedAt?: number;
    externalIp?: string;
    hostId?: string;
    hubId?: string;
    id: string;
    inactive?: boolean;
    internalIp?: string;
    lastCheckin?: number;
    name?: string;
    organizationId?: string;
    os?: string;
    siteId?: string;
    systemInfo?: Map<string, any>;
    updatedAt?: number;
    version?: string;
}
