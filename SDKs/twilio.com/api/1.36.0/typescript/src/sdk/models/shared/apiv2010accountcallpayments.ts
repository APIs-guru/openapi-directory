import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiV2010AccountCallPayments extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
