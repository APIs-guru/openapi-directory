import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactAddressInfo } from "./contactaddressinfo";
import { UserDutyInfo } from "./userdutyinfo";


export class UserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=colorIndex" })
  colorIndex?: number;

  @Metadata({ data: "json, name=contactAddresses", elemType: shared.ContactAddressInfo })
  contactAddresses?: ContactAddressInfo[];

  @Metadata({ data: "json, name=dutyInfo" })
  dutyInfo?: UserDutyInfo;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isDeactivated" })
  isDeactivated?: boolean;

  @Metadata({ data: "json, name=isInvite" })
  isInvite?: boolean;

  @Metadata({ data: "json, name=mail" })
  mail?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=roleId" })
  roleId?: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=userImageLastModified" })
  userImageLastModified?: Date;
}
