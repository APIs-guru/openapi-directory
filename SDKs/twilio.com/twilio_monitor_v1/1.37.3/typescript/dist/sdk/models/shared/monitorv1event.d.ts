import { SpeakeasyBase } from "../../../internal/utils";
export declare class MonitorV1Event extends SpeakeasyBase {
    accountSid?: string;
    actorSid?: string;
    actorType?: string;
    description?: string;
    eventData?: any;
    eventDate?: Date;
    eventType?: string;
    links?: Map<string, any>;
    resourceSid?: string;
    resourceType?: string;
    sid?: string;
    source?: string;
    sourceIpAddress?: string;
    url?: string;
}
