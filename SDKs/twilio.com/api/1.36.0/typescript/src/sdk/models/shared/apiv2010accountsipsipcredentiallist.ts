import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiV2010AccountSipSipCredentialList extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
