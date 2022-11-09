import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SinkEnumSinkTypeEnum } from "./sinkenumsinktypeenum";
import { SinkEnumStatusEnum } from "./sinkenumstatusenum";
export declare class EventsV1Sink extends SpeakeasyBase {
    dateCreated?: Date;
    dateUpdated?: Date;
    description?: string;
    links?: Map<string, any>;
    sid?: string;
    sinkConfiguration?: any;
    sinkType?: SinkEnumSinkTypeEnum;
    status?: SinkEnumStatusEnum;
    url?: string;
}
