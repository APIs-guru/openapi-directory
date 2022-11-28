import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserInvite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=roleId" })
  roleId?: string;
}
