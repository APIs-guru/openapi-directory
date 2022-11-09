import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionType } from "./permissiontype";


// StoryCollaborator
/** 
 * Description of a user that can collaborate on a story
**/
export class StoryCollaborator extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lead_id" })
  leadId?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=permission_type" })
  permissionType?: PermissionType;

  @Metadata({ data: "json, name=permission_type_id" })
  permissionTypeId?: string;

  @Metadata({ data: "json, name=story_id" })
  storyId?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}
