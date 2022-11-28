import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PermissionType
/** 
 * A permission type that can be applied to story collaborator
**/
export class PermissionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_add_collaborators" })
  canAddCollaborators?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_delete" })
  canDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_edit" })
  canEdit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_view" })
  canView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
