import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePasswordInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentPassword" })
  currentPassword?: string;

  @Metadata({ data: "json, name=newPassword" })
  newPassword?: string;
}
