import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A permission type that can be applied to story collaborator
**/
export declare class PermissionType extends SpeakeasyBase {
    canAddCollaborators?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canView?: boolean;
    createdAt?: Date;
    createdBy?: string;
    id?: string;
    name?: string;
    updatedAt?: Date;
    updatedBy?: string;
}
