import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { VenueBoxOfficeInfo } from "./venueboxofficeinfo";
import { City } from "./city";
import { Country } from "./country";
import { Dma } from "./dma";
import { VenueGeneralInfo } from "./venuegeneralinfo";
import { Image } from "./image";
import { Location } from "./location";
import { Market } from "./market";
import { Social } from "./social";
import { Source } from "./source";
import { State } from "./state";

export enum VenueTypeEnum {
    Event = "event"
,    Venue = "venue"
,    Attraction = "attraction"
}


// Venue
/** 
 * Venue
**/
export class Venue extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessibleSeatingDetails" })
  accessibleSeatingDetails?: Map<string, string>;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=additionalInfos" })
  additionalInfos?: Map<string, string>;

  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=boxOfficeInfo" })
  boxOfficeInfo?: VenueBoxOfficeInfo;

  @Metadata({ data: "json, name=city" })
  city?: City;

  @Metadata({ data: "json, name=country" })
  country?: Country;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=descriptions" })
  descriptions?: Map<string, string>;

  @Metadata({ data: "json, name=discoverable" })
  discoverable?: boolean;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=dma", elemType: shared.Dma })
  dma?: Dma[];

  @Metadata({ data: "json, name=generalInfo" })
  generalInfo?: VenueGeneralInfo;

  @Metadata({ data: "json, name=images", elemType: shared.Image })
  images?: Image[];

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=markets", elemType: shared.Market })
  markets?: Market[];

  @Metadata({ data: "json, name=names" })
  names?: Map<string, string>;

  @Metadata({ data: "json, name=parkingDetails" })
  parkingDetails?: Map<string, string>;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=references" })
  references?: Map<string, string>;

  @Metadata({ data: "json, name=relationships" })
  relationships?: Map<string, any>[];

  @Metadata({ data: "json, name=social" })
  social?: Social;

  @Metadata({ data: "json, name=source" })
  source?: Source;

  @Metadata({ data: "json, name=state" })
  state?: State;

  @Metadata({ data: "json, name=test" })
  test?: boolean;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=type" })
  type: VenueTypeEnum;

  @Metadata({ data: "json, name=units" })
  units?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
