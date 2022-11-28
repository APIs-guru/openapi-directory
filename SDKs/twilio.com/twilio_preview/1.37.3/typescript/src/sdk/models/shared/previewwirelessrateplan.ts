import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewWirelessRatePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=data_enabled" })
  dataEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=data_limit" })
  dataLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=data_metering" })
  dataMetering?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=international_roaming" })
  internationalRoaming?: string[];

  @SpeakeasyMetadata({ data: "json, name=messaging_enabled" })
  messagingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=national_roaming_enabled" })
  nationalRoamingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_enabled" })
  voiceEnabled?: boolean;
}
