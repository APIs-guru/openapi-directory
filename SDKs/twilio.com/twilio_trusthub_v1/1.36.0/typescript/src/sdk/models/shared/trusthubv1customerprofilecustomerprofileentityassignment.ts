import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TrusthubV1CustomerProfileCustomerProfileEntityAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=customer_profile_sid" })
  customerProfileSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=object_sid" })
  objectSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
