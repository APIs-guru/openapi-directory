import { SpeakeasyBase } from "../../../internal/utils";
export declare class Event extends SpeakeasyBase {
    action?: string;
    clientId?: string;
    createdAt?: number;
    details?: Map<string, any>;
    id?: string;
    organizationId?: string;
    processedAt?: number;
    processorId?: string;
    siteId?: string;
    sourceId?: string;
    sourceName?: string;
    sourceType?: string;
    state?: string;
    success?: boolean;
    targetId?: string;
    targetName?: string;
    targetType?: string;
}
