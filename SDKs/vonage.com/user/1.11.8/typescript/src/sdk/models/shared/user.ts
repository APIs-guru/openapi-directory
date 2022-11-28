import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { UserExtension } from "./userextension";



export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact_numbers", elemType: Contact })
  contactNumbers?: Contact[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=extensions", elemType: UserExtension })
  extensions?: UserExtension[];

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=login_name" })
  loginName?: string;
}
