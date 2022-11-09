import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Classification } from "./classification";
import { Image } from "./image";
import { Source } from "./source";

export enum AttractionTypeEnum {
    Event = "event"
,    Venue = "venue"
,    Attraction = "attraction"
}


// Attraction
/** 
 * Attraction
**/
export class Attraction extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=additionalInfos" })
  additionalInfos?: Map<string, string>;

  @Metadata({ data: "json, name=classifications", elemType: shared.Classification })
  classifications?: Classification[];

  @Metadata({ data: "json, name=descriptions" })
  descriptions?: Map<string, string>;

  @Metadata({ data: "json, name=discoverable" })
  discoverable?: boolean;

  @Metadata({ data: "json, name=images", elemType: shared.Image })
  images?: Image[];

  @Metadata({ data: "json, name=names" })
  names?: Map<string, string>;

  @Metadata({ data: "json, name=references" })
  references?: Map<string, string>;

  @Metadata({ data: "json, name=relationships" })
  relationships?: Map<string, any>[];

  @Metadata({ data: "json, name=source" })
  source?: Source;

  @Metadata({ data: "json, name=test" })
  test?: boolean;

  @Metadata({ data: "json, name=type" })
  type: AttractionTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
