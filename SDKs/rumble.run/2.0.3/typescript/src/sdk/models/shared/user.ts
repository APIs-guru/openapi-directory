import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_admin" })
  clientAdmin?: boolean;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=invite_token_expiration" })
  inviteTokenExpiration?: number;

  @Metadata({ data: "json, name=last_login_at" })
  lastLoginAt?: number;

  @Metadata({ data: "json, name=last_login_ip" })
  lastLoginIp?: string;

  @Metadata({ data: "json, name=last_login_ua" })
  lastLoginUa?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=login_failures" })
  loginFailures?: number;

  @Metadata({ data: "json, name=org_default_role" })
  orgDefaultRole?: string;

  @Metadata({ data: "json, name=org_roles" })
  orgRoles?: Map<string, any>;

  @Metadata({ data: "json, name=reset_token_expiration" })
  resetTokenExpiration?: number;

  @Metadata({ data: "json, name=sso_only" })
  ssoOnly?: boolean;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: number;
}
