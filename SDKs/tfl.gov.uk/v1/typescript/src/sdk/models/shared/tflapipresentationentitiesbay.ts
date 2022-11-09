import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesBay extends SpeakeasyBase {
  @Metadata({ data: "json, name=bayCount" })
  bayCount?: number;

  @Metadata({ data: "json, name=bayType" })
  bayType?: string;

  @Metadata({ data: "json, name=free" })
  free?: number;

  @Metadata({ data: "json, name=occupied" })
  occupied?: number;
}
