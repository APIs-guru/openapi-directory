import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiKey } from "./apikey";
import { GroupRole } from "./grouprole";
import { BaseGroup } from "./basegroup";
import { UserFeature } from "./userfeature";



export class User extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKey?: ApiKey;

  @SpeakeasyMetadata()
  canSwitchUser?: boolean;

  @SpeakeasyMetadata()
  changePassword?: boolean;

  @SpeakeasyMetadata()
  contactNumber?: string;

  @SpeakeasyMetadata()
  created?: Date;

  @SpeakeasyMetadata()
  currentLogin?: Date;

  @SpeakeasyMetadata()
  currentLoginIpAddress?: string;

  @SpeakeasyMetadata()
  dateOfBirth?: Date;

  @SpeakeasyMetadata()
  deleted?: boolean;

  @SpeakeasyMetadata()
  dummy?: boolean;

  @SpeakeasyMetadata()
  email?: string;

  @SpeakeasyMetadata()
  emailVerified?: boolean;

  @SpeakeasyMetadata()
  forename?: string;

  @SpeakeasyMetadata({ elemType: GroupRole })
  groupRoles?: GroupRole[];

  @SpeakeasyMetadata()
  hideSecretWordNotification?: boolean;

  @SpeakeasyMetadata()
  id?: number;

  @SpeakeasyMetadata()
  identifiers?: Map<string, any>[];

  @SpeakeasyMetadata()
  lastLogin?: Date;

  @SpeakeasyMetadata()
  lastLoginIpAddress?: string;

  @SpeakeasyMetadata()
  latestDataReceivedBy?: BaseGroup;

  @SpeakeasyMetadata()
  latestDataReceivedDate?: Date;

  @SpeakeasyMetadata()
  locked?: boolean;

  @SpeakeasyMetadata()
  picture?: string;

  @SpeakeasyMetadata()
  roleDescription?: string;

  @SpeakeasyMetadata()
  secretWordIsSet?: boolean;

  @SpeakeasyMetadata()
  surname?: string;

  @SpeakeasyMetadata({ elemType: UserFeature })
  userFeatures?: UserFeature[];

  @SpeakeasyMetadata()
  username?: string;
}
