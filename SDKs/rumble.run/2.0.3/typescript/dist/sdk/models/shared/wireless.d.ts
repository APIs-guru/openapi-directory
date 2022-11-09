import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Wireless extends SpeakeasyBase {
    agentName?: string;
    authentication?: string;
    bssid?: string;
    channels?: string;
    createdAt?: number;
    data?: Map<string, string>;
    encryption?: string;
    essid?: string;
    family?: string;
    id: string;
    interface?: string;
    lastAgentId?: string;
    lastSeen?: number;
    lastTaskId?: string;
    orgName?: string;
    organizationId?: string;
    signal?: number;
    siteId?: string;
    siteName?: string;
    type?: string;
    vendor?: string;
}
