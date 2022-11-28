import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OoxmlDocument
/** 
 * A reference to an Ooxml Automation Document from the Presalytics Ooxml Automation API
**/
export class OoxmlDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=delete_target_on_story_delete" })
  deleteTargetOnStoryDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ooxml_automation_id" })
  ooxmlAutomationId?: string;

  @SpeakeasyMetadata({ data: "json, name=story_id" })
  storyId?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
