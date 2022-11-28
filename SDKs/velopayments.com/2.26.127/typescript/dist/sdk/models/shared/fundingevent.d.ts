import { SpeakeasyBase } from "../../../internal/utils";
import { FundingEventTypeEnum } from "./fundingeventtypeenum";
export declare class FundingEvent extends SpeakeasyBase {
    eventDateTime?: Date;
    eventId?: string;
    fundingEventType?: FundingEventTypeEnum;
    principal?: string;
}
