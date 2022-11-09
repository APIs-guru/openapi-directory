import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attraction } from "./attraction";
import { Classification } from "./classification";
import { EventDates } from "./eventdates";
import { Image } from "./image";
import { Location } from "./location";
import { Place } from "./place";
import { PriceRange } from "./pricerange";
import { Promoter } from "./promoter";
import { PublicVisibility } from "./publicvisibility";
import { EventSalesDates } from "./eventsalesdates";
import { Source } from "./source";
import { Venue } from "./venue";

export enum EventTypeEnum {
    Event = "event"
,    Venue = "venue"
,    Attraction = "attraction"
}


// Event
/** 
 * Event
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=additionalInfos" })
  additionalInfos?: Map<string, string>;

  @Metadata({ data: "json, name=attractions", elemType: shared.Attraction })
  attractions?: Attraction[];

  @Metadata({ data: "json, name=classifications", elemType: shared.Classification })
  classifications?: Classification[];

  @Metadata({ data: "json, name=dates" })
  dates?: EventDates;

  @Metadata({ data: "json, name=descriptions" })
  descriptions?: Map<string, string>;

  @Metadata({ data: "json, name=discoverable" })
  discoverable?: boolean;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=images", elemType: shared.Image })
  images?: Image[];

  @Metadata({ data: "json, name=infos" })
  infos?: Map<string, string>;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=names" })
  names?: Map<string, string>;

  @Metadata({ data: "json, name=place" })
  place?: Place;

  @Metadata({ data: "json, name=pleaseNotes" })
  pleaseNotes?: Map<string, string>;

  @Metadata({ data: "json, name=priceRanges", elemType: shared.PriceRange })
  priceRanges?: PriceRange[];

  @Metadata({ data: "json, name=promoter" })
  promoter?: Promoter;

  @Metadata({ data: "json, name=publicVisibility" })
  publicVisibility?: PublicVisibility;

  @Metadata({ data: "json, name=references" })
  references?: Map<string, string>;

  @Metadata({ data: "json, name=relationships" })
  relationships?: Map<string, any>[];

  @Metadata({ data: "json, name=sales" })
  sales?: EventSalesDates;

  @Metadata({ data: "json, name=source" })
  source?: Source;

  @Metadata({ data: "json, name=test" })
  test?: boolean;

  @Metadata({ data: "json, name=type" })
  type: EventTypeEnum;

  @Metadata({ data: "json, name=units" })
  units?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=venue" })
  venue?: Venue;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
