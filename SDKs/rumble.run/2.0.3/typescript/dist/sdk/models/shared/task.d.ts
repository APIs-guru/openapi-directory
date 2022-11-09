import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Task extends SpeakeasyBase {
    agentId?: string;
    clientId?: string;
    createdAt?: number;
    createdBy?: string;
    createdByUserId?: string;
    cruncherId?: string;
    description?: string;
    error?: string;
    hidden?: boolean;
    id: string;
    name?: string;
    organizationId?: string;
    params?: Map<string, string>;
    parentId?: string;
    recur?: boolean;
    recurFrequency?: string;
    recurLast?: number;
    recurLastTaskId?: string;
    recurNext?: number;
    siteId?: string;
    startTime?: number;
    stats?: Map<string, any>;
    status?: string;
    type?: string;
    updatedAt?: number;
}
