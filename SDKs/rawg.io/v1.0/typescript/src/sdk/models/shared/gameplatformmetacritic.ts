import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GamePlatformMetacritic extends SpeakeasyBase {
  @Metadata({ data: "json, name=metascore" })
  metascore?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
