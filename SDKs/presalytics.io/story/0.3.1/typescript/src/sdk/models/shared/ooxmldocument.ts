import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OoxmlDocument
/** 
 * A reference to an Ooxml Automation Document from the Presalytics Ooxml Automation API
**/
export class OoxmlDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=delete_target_on_story_delete" })
  deleteTargetOnStoryDelete?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ooxml_automation_id" })
  ooxmlAutomationId?: string;

  @Metadata({ data: "json, name=story_id" })
  storyId?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
