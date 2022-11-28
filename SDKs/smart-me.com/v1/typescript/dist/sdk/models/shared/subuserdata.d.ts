import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubUserDataPermissionLevelEnum {
    SelectedFolderAndSubfoldersMeters = "SelectedFolderAndSubfoldersMeters",
    SelectedFolderOnly = "SelectedFolderOnly"
}
/**
 * Container data for the sub user
**/
export declare class SubUserData extends SpeakeasyBase {
    accessEndDate?: Date;
    accessTimeStartDate?: Date;
    email?: string;
    id?: string;
    newPassword?: string;
    permissionLevel?: SubUserDataPermissionLevelEnum;
    username?: string;
}
