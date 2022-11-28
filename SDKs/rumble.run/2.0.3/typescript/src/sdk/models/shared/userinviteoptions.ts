import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserInviteOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_admin" })
  clientAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=org_default_role" })
  orgDefaultRole?: string;

  @SpeakeasyMetadata({ data: "json, name=org_roles" })
  orgRoles?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
