import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayorEmailOptOutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reminderEmailsOptOut" })
  reminderEmailsOptOut: boolean;
}
