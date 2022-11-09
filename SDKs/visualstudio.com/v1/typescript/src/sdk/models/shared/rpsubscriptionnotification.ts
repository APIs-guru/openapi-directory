import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RpSubscriptionProperties } from "./rpsubscriptionproperties";


export class RpSubscriptionNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties" })
  properties?: RpSubscriptionProperties;

  @Metadata({ data: "json, name=registrationDate" })
  registrationDate?: Date;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
