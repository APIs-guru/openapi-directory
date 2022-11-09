import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BasicUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=login_name" })
  loginName?: string;
}
