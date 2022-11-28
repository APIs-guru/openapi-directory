import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionType } from "./permissiontype";



// StoryCollaborator
/** 
 * Description of a user that can collaborate on a story
**/
export class StoryCollaborator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lead_id" })
  leadId?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permission_type" })
  permissionType?: PermissionType;

  @SpeakeasyMetadata({ data: "json, name=permission_type_id" })
  permissionTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=story_id" })
  storyId?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}
