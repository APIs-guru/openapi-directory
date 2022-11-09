import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionType } from "./permissiontype";
/**
 * Description of a user that can collaborate on a story
**/
export declare class StoryCollaborator extends SpeakeasyBase {
    active?: boolean;
    createdAt?: Date;
    createdBy?: string;
    email?: string;
    id?: string;
    leadId?: number;
    name?: string;
    permissionType?: PermissionType;
    permissionTypeId?: string;
    storyId?: string;
    updatedAt?: Date;
    updatedBy?: string;
    userId?: string;
}
