import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserInviteOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_admin" })
  clientAdmin?: boolean;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=org_default_role" })
  orgDefaultRole?: string;

  @Metadata({ data: "json, name=org_roles" })
  orgRoles?: Map<string, any>;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}
