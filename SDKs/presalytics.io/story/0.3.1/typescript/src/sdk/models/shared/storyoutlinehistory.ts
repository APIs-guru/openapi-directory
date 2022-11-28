import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StoryOutlineHistory
/** 
 * A revision repository for story outlines
**/
export class StoryOutlineHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collaborator_user_id" })
  collaboratorUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=outline" })
  outline?: string;

  @SpeakeasyMetadata({ data: "json, name=revision_number" })
  revisionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=story_id" })
  storyId?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
