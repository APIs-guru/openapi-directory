import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CredentialEnumPushServiceEnum } from "./credentialenumpushserviceenum";


export class IpMessagingV1Credential extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=sandbox" })
  sandbox?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=type" })
  type?: CredentialEnumPushServiceEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
