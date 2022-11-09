import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PermissionType
/** 
 * A permission type that can be applied to story collaborator
**/
export class PermissionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_add_collaborators" })
  canAddCollaborators?: boolean;

  @Metadata({ data: "json, name=can_delete" })
  canDelete?: boolean;

  @Metadata({ data: "json, name=can_edit" })
  canEdit?: boolean;

  @Metadata({ data: "json, name=can_view" })
  canView?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
