import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesPlaceCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableKeys" })
  availableKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;
}
