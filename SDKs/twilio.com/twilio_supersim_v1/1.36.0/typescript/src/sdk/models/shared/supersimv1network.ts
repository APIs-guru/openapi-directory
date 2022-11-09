import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SupersimV1Network extends SpeakeasyBase {
  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=identifiers" })
  identifiers?: any[];

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
