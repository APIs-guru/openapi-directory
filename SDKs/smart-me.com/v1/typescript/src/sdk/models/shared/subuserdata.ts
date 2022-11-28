import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubUserDataPermissionLevelEnum {
    SelectedFolderAndSubfoldersMeters = "SelectedFolderAndSubfoldersMeters",
    SelectedFolderOnly = "SelectedFolderOnly"
}


// SubUserData
/** 
 * Container data for the sub user
**/
export class SubUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessEndDate, form, name=AccessEndDate;" })
  accessEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=AccessTimeStartDate, form, name=AccessTimeStartDate;" })
  accessTimeStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=NewPassword, form, name=NewPassword;" })
  newPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionLevel, form, name=PermissionLevel;" })
  permissionLevel?: SubUserDataPermissionLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=Username, form, name=Username;" })
  username?: string;
}
