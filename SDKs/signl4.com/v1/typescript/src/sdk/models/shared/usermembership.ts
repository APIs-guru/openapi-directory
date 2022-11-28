import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserMembershipInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleId" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;
}
