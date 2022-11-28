import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistrictList } from "./districtlist";
import { Webcast } from "./webcast";



export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: DistrictList;

  @SpeakeasyMetadata({ data: "json, name=division_keys" })
  divisionKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=event_code" })
  eventCode: string;

  @SpeakeasyMetadata({ data: "json, name=event_type" })
  eventType: number;

  @SpeakeasyMetadata({ data: "json, name=event_type_string" })
  eventTypeString: string;

  @SpeakeasyMetadata({ data: "json, name=first_event_code" })
  firstEventCode?: string;

  @SpeakeasyMetadata({ data: "json, name=first_event_id" })
  firstEventId?: string;

  @SpeakeasyMetadata({ data: "json, name=gmaps_place_id" })
  gmapsPlaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=gmaps_url" })
  gmapsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;

  @SpeakeasyMetadata({ data: "json, name=location_name" })
  locationName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent_event_key" })
  parentEventKey?: string;

  @SpeakeasyMetadata({ data: "json, name=playoff_type" })
  playoffType?: number;

  @SpeakeasyMetadata({ data: "json, name=playoff_type_string" })
  playoffTypeString?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=short_name" })
  shortName?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "json, name=state_prov" })
  stateProv?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=webcasts", elemType: Webcast })
  webcasts?: Webcast[];

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: number;
}
