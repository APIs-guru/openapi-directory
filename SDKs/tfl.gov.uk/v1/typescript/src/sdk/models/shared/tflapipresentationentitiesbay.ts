import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesBay extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bayCount" })
  bayCount?: number;

  @SpeakeasyMetadata({ data: "json, name=bayType" })
  bayType?: string;

  @SpeakeasyMetadata({ data: "json, name=free" })
  free?: number;

  @SpeakeasyMetadata({ data: "json, name=occupied" })
  occupied?: number;
}
