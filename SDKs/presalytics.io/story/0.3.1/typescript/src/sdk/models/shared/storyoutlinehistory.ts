import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StoryOutlineHistory
/** 
 * A revision repository for story outlines
**/
export class StoryOutlineHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=collaborator_user_id" })
  collaboratorUserId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=outline" })
  outline?: string;

  @Metadata({ data: "json, name=revision_number" })
  revisionNumber?: number;

  @Metadata({ data: "json, name=story_id" })
  storyId?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
