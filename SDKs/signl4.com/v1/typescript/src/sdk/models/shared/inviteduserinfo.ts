import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvitedUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isInvite" })
  isInvite?: boolean;

  @Metadata({ data: "json, name=mail" })
  mail?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=roleId" })
  roleId?: string;
}
