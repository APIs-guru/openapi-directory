import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}


// Venue
/** 
 * Venue
**/
export class Venue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessibleSeatingDetails" })
  accessibleSeatingDetails?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=additionalInfos" })
  additionalInfos?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=boxOfficeInfo" })
  boxOfficeInfo?: VenueBoxOfficeInfo;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: City;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: Country;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=descriptions" })
  descriptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=discoverable" })
  discoverable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=dma", elemType: Dma })
  dma?: Dma[];

  @SpeakeasyMetadata({ data: "json, name=generalInfo" })
  generalInfo?: VenueGeneralInfo;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: Image })
  images?: Image[];

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=markets", elemType: Market })
  markets?: Market[];

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parkingDetails" })
  parkingDetails?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=social" })
  social?: Social;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: State;

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: VenueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
