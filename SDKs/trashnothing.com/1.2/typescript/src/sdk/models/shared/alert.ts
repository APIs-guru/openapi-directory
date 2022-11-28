import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Alert
/** 
 * A search alert that the user has created so that they can be notified when new posts match the search query specified by the alert.
**/
export class Alert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alert_id" })
  alertId?: string;

  @SpeakeasyMetadata({ data: "json, name=last_sent" })
  lastSent?: Date;

  @SpeakeasyMetadata({ data: "json, name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "json, name=send_count" })
  sendCount?: number;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: string[];

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}
