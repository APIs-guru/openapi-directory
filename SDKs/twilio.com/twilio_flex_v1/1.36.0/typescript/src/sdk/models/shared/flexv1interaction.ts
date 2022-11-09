import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FlexV1Interaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: any;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=routing" })
  routing?: any;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
