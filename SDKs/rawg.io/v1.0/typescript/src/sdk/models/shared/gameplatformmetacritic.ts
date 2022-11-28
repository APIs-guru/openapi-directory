import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GamePlatformMetacritic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metascore" })
  metascore?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
