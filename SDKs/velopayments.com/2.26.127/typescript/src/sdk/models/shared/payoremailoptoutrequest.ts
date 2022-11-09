import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayorEmailOptOutRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=reminderEmailsOptOut" })
  reminderEmailsOptOut: boolean;
}
