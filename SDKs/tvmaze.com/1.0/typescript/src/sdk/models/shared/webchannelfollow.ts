import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WebchannelFollowEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webchannel" })
  webchannel?: Map<string, any>;
}


export class WebchannelFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: WebchannelFollowEmbedded;

  @SpeakeasyMetadata({ data: "json, name=webchannel_id" })
  webchannelId?: number;
}
