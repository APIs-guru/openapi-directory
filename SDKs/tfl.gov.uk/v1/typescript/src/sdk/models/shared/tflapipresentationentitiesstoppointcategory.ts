import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesStopPointCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableKeys" })
  availableKeys?: string[];

  @Metadata({ data: "json, name=category" })
  category?: string;
}
