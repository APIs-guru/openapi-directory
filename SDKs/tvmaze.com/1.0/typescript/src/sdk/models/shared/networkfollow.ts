import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NetworkFollowEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network?: Map<string, any>;
}


export class NetworkFollow extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: NetworkFollowEmbedded;

  @Metadata({ data: "json, name=network_id" })
  networkId?: number;
}
