import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwardRecipient } from "./awardrecipient";



export class Award extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=award_type" })
  awardType: number;

  @SpeakeasyMetadata({ data: "json, name=event_key" })
  eventKey: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_list", elemType: AwardRecipient })
  recipientList: AwardRecipient[];

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: number;
}
