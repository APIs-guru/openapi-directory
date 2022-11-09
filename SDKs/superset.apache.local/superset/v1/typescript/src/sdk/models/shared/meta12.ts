import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta12 extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @Metadata({ data: "json, name=created_on" })
  createdOn?: Date;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=fail_login_count" })
  failLoginCount?: number;

  @Metadata({ data: "json, name=first_name" })
  firstName: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_login" })
  lastLogin?: Date;

  @Metadata({ data: "json, name=last_name" })
  lastName: string;

  @Metadata({ data: "json, name=login_count" })
  loginCount?: number;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}
