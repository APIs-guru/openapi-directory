import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RpSubscriptionProperties } from "./rpsubscriptionproperties";



export class RpSubscriptionNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: RpSubscriptionProperties;

  @SpeakeasyMetadata({ data: "json, name=registrationDate" })
  registrationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
