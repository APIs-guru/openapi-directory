import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RoleUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles: string[];

  @SpeakeasyMetadata({ data: "json, name=verificationCode" })
  verificationCode?: string;
}
