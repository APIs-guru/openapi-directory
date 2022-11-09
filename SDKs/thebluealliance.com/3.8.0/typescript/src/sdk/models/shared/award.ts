import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwardRecipient } from "./awardrecipient";


export class Award extends SpeakeasyBase {
  @Metadata({ data: "json, name=award_type" })
  awardType: number;

  @Metadata({ data: "json, name=event_key" })
  eventKey: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=recipient_list", elemType: shared.AwardRecipient })
  recipientList: AwardRecipient[];

  @Metadata({ data: "json, name=year" })
  year: number;
}
