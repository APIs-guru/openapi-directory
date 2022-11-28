import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// View
/** 
 * A Page view within a session-create
**/
export class View extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_msecs" })
  activeMsecs?: number;

  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=session_id" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_msecs" })
  totalMsecs?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
