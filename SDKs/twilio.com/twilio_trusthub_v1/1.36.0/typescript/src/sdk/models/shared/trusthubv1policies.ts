import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TrusthubV1Policies extends SpeakeasyBase {
  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=requirements" })
  requirements?: any;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
