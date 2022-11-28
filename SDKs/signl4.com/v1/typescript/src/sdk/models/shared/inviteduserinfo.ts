import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvitedUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isInvite" })
  isInvite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mail" })
  mail?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=roleId" })
  roleId?: string;
}
