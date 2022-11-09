import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserInvite extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=roleId" })
  roleId?: string;
}
