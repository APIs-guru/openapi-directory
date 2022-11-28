import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=identifiers" })
  identifiers?: any[];

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=network_access_profile_sid" })
  networkAccessProfileSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
