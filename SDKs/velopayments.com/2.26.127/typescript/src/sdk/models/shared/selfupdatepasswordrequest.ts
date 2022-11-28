import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SelfUpdatePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newPassword" })
  newPassword: string;

  @SpeakeasyMetadata({ data: "json, name=oldPassword" })
  oldPassword: string;
}
