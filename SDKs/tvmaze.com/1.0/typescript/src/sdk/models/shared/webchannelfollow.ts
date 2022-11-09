import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WebchannelFollowEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=webchannel" })
  webchannel?: Map<string, any>;
}


export class WebchannelFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: WebchannelFollowEmbedded;

  @Metadata({ data: "json, name=webchannel_id" })
  webchannelId?: number;
}
