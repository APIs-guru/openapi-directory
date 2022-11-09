import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SelfUpdatePasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=newPassword" })
  newPassword: string;

  @Metadata({ data: "json, name=oldPassword" })
  oldPassword: string;
}
