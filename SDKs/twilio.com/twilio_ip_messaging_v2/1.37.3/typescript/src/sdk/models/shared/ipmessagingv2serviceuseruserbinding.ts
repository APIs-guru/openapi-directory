import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserBindingEnumBindingTypeEnum } from "./userbindingenumbindingtypeenum";



export class IpMessagingV2ServiceUserUserBinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=binding_type" })
  bindingType?: UserBindingEnumBindingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=credential_sid" })
  credentialSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=message_types" })
  messageTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=user_sid" })
  userSid?: string;
}
