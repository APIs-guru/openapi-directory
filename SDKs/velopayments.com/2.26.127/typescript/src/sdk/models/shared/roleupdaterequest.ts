import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RoleUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=roles" })
  roles: string[];

  @Metadata({ data: "json, name=verificationCode" })
  verificationCode?: string;
}
