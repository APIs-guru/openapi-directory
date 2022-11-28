import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactAddressInfo } from "./contactaddressinfo";
import { UserDutyInfo } from "./userdutyinfo";



export class UserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colorIndex" })
  colorIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=contactAddresses", elemType: ContactAddressInfo })
  contactAddresses?: ContactAddressInfo[];

  @SpeakeasyMetadata({ data: "json, name=dutyInfo" })
  dutyInfo?: UserDutyInfo;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isDeactivated" })
  isDeactivated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isInvite" })
  isInvite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mail" })
  mail?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=roleId" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=userImageLastModified" })
  userImageLastModified?: Date;
}
