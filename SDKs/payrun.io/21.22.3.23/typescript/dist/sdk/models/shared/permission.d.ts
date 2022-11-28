import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PermissionPermissionPolicyEnum {
    Allow = "Allow",
    Deny = "Deny"
}
export declare enum PermissionPermissionVerbsEnum {
    Read = "Read",
    Write = "Write",
    Delete = "Delete",
    All = "All"
}
export declare class PermissionPermission extends SpeakeasyBase {
    description?: string;
    expression?: string;
    name?: string;
    policy?: PermissionPermissionPolicyEnum;
    verbs?: PermissionPermissionVerbsEnum;
}
export declare class Permission extends SpeakeasyBase {
    permission?: PermissionPermission;
}
