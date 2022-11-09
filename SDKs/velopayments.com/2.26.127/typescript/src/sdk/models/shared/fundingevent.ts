import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FundingEventTypeEnum } from "./fundingeventtypeenum";


export class FundingEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventDateTime" })
  eventDateTime?: Date;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=fundingEventType" })
  fundingEventType?: FundingEventTypeEnum;

  @Metadata({ data: "json, name=principal" })
  principal?: string;
}
