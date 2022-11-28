import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NetworkFollowEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: Map<string, any>;
}


export class NetworkFollow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: NetworkFollowEmbedded;

  @SpeakeasyMetadata({ data: "json, name=network_id" })
  networkId?: number;
}
