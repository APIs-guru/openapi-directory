import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// View
/** 
 * A Page view within a session-create
**/
export class View extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_msecs" })
  activeMsecs?: number;

  @Metadata({ data: "json, name=additional" })
  additional?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=end_time" })
  endTime?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @Metadata({ data: "json, name=session_id" })
  sessionId?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: Date;

  @Metadata({ data: "json, name=total_msecs" })
  totalMsecs?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
