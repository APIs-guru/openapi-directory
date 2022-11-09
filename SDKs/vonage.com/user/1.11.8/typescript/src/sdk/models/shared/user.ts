import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Contact } from "./contact";
import { UserExtension } from "./userextension";


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=contact_numbers", elemType: shared.Contact })
  contactNumbers?: Contact[];

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=extensions", elemType: shared.UserExtension })
  extensions?: UserExtension[];

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=login_name" })
  loginName?: string;
}
