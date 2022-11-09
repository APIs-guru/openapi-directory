import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Alert
/** 
 * A search alert that the user has created so that they can be notified when new posts match the search query specified by the alert.
**/
export class Alert extends SpeakeasyBase {
  @Metadata({ data: "json, name=alert_id" })
  alertId?: string;

  @Metadata({ data: "json, name=last_sent" })
  lastSent?: Date;

  @Metadata({ data: "json, name=search" })
  search?: string;

  @Metadata({ data: "json, name=send_count" })
  sendCount?: number;

  @Metadata({ data: "json, name=types" })
  types?: string[];

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}
