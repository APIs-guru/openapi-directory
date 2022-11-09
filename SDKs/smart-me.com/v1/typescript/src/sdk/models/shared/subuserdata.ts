import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SubUserDataPermissionLevelEnum {
    SelectedFolderAndSubfoldersMeters = "SelectedFolderAndSubfoldersMeters"
,    SelectedFolderOnly = "SelectedFolderOnly"
}


// SubUserData
/** 
 * Container data for the sub user
**/
export class SubUserData extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessEndDate, form, name=AccessEndDate;" })
  accessEndDate?: Date;

  @Metadata({ data: "json, name=AccessTimeStartDate, form, name=AccessTimeStartDate;" })
  accessTimeStartDate?: Date;

  @Metadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @Metadata({ data: "json, name=NewPassword, form, name=NewPassword;" })
  newPassword?: string;

  @Metadata({ data: "json, name=PermissionLevel, form, name=PermissionLevel;" })
  permissionLevel?: SubUserDataPermissionLevelEnum;

  @Metadata({ data: "json, name=Username, form, name=Username;" })
  username?: string;
}
