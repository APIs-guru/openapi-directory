import { SpeakeasyBase } from "../../../internal/utils";
export declare class User extends SpeakeasyBase {
    clientAdmin?: boolean;
    clientId?: string;
    createdAt?: number;
    email?: string;
    firstName?: string;
    id: string;
    inviteTokenExpiration?: number;
    lastLoginAt?: number;
    lastLoginIp?: string;
    lastLoginUa?: string;
    lastName?: string;
    loginFailures?: number;
    orgDefaultRole?: string;
    orgRoles?: Map<string, any>;
    resetTokenExpiration?: number;
    ssoOnly?: boolean;
    updatedAt?: number;
}
