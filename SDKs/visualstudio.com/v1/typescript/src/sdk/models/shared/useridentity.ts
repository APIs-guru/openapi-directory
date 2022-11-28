import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userPrincipalName" })
  userPrincipalName: string;
}
