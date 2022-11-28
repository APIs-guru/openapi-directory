import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Meta12 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_on" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=fail_login_count" })
  failLoginCount?: number;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_login" })
  lastLogin?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=login_count" })
  loginCount?: number;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
