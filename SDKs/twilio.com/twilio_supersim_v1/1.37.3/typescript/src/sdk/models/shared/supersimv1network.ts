import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SupersimV1Network extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=identifiers" })
  identifiers?: any[];

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
