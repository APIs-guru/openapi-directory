import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MessagingV1ServiceShortCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=short_code" })
  shortCode?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
