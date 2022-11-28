import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Classification } from "./classification";
import { Image } from "./image";
import { Source } from "./source";


export enum AttractionTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}


// Attraction
/** 
 * Attraction
**/
export class Attraction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=additionalInfos" })
  additionalInfos?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=classifications", elemType: Classification })
  classifications?: Classification[];

  @SpeakeasyMetadata({ data: "json, name=descriptions" })
  descriptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=discoverable" })
  discoverable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: Image })
  images?: Image[];

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AttractionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
