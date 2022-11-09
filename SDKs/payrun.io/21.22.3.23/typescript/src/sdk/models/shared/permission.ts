import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PermissionPermissionPolicyEnum {
    Allow = "Allow"
,    Deny = "Deny"
}

export enum PermissionPermissionVerbsEnum {
    Read = "Read"
,    Write = "Write"
,    Delete = "Delete"
,    All = "All"
}


export class PermissionPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Expression" })
  expression?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Policy" })
  policy?: PermissionPermissionPolicyEnum;

  @Metadata({ data: "json, name=Verbs" })
  verbs?: PermissionPermissionVerbsEnum;
}


export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=Permission" })
  permission?: PermissionPermission;
}
