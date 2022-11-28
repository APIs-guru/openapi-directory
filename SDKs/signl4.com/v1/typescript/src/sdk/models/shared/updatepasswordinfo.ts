import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePasswordInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentPassword" })
  currentPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=newPassword" })
  newPassword?: string;
}
