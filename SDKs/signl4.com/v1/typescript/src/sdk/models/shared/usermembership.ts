import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=isValid" })
  isValid?: boolean;

  @Metadata({ data: "json, name=roleId" })
  roleId?: string;

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;
}
