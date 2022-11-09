import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserBindingEnumBindingTypeEnum } from "./userbindingenumbindingtypeenum";


export class ChatV2ServiceUserUserBinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=binding_type" })
  bindingType?: UserBindingEnumBindingTypeEnum;

  @Metadata({ data: "json, name=credential_sid" })
  credentialSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=message_types" })
  messageTypes?: string[];

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=user_sid" })
  userSid?: string;
}
