import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_admin" })
  clientAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=invite_token_expiration" })
  inviteTokenExpiration?: number;

  @SpeakeasyMetadata({ data: "json, name=last_login_at" })
  lastLoginAt?: number;

  @SpeakeasyMetadata({ data: "json, name=last_login_ip" })
  lastLoginIp?: string;

  @SpeakeasyMetadata({ data: "json, name=last_login_ua" })
  lastLoginUa?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=login_failures" })
  loginFailures?: number;

  @SpeakeasyMetadata({ data: "json, name=org_default_role" })
  orgDefaultRole?: string;

  @SpeakeasyMetadata({ data: "json, name=org_roles" })
  orgRoles?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=reset_token_expiration" })
  resetTokenExpiration?: number;

  @SpeakeasyMetadata({ data: "json, name=sso_only" })
  ssoOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: number;
}
