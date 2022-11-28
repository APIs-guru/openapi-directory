import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PermissionPermissionPolicyEnum {
    Allow = "Allow",
    Deny = "Deny"
}

export enum PermissionPermissionVerbsEnum {
    Read = "Read",
    Write = "Write",
    Delete = "Delete",
    All = "All"
}


export class PermissionPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: PermissionPermissionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=Verbs" })
  verbs?: PermissionPermissionVerbsEnum;
}


export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Permission" })
  permission?: PermissionPermission;
}
