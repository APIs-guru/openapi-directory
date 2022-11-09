import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiV2010AccountNewSigningKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;
}
