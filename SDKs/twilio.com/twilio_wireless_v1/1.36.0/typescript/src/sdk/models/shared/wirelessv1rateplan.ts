import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WirelessV1RatePlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=data_enabled" })
  dataEnabled?: boolean;

  @Metadata({ data: "json, name=data_limit" })
  dataLimit?: number;

  @Metadata({ data: "json, name=data_metering" })
  dataMetering?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=international_roaming" })
  internationalRoaming?: string[];

  @Metadata({ data: "json, name=international_roaming_data_limit" })
  internationalRoamingDataLimit?: number;

  @Metadata({ data: "json, name=messaging_enabled" })
  messagingEnabled?: boolean;

  @Metadata({ data: "json, name=national_roaming_data_limit" })
  nationalRoamingDataLimit?: number;

  @Metadata({ data: "json, name=national_roaming_enabled" })
  nationalRoamingEnabled?: boolean;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=voice_enabled" })
  voiceEnabled?: boolean;
}
