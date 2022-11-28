import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FundingEventTypeEnum } from "./fundingeventtypeenum";



export class FundingEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventDateTime" })
  eventDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingEventType" })
  fundingEventType?: FundingEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: string;
}
