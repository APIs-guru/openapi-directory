import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DistrictList } from "./districtlist";
import { Webcast } from "./webcast";


export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=district" })
  district?: DistrictList;

  @Metadata({ data: "json, name=division_keys" })
  divisionKeys?: string[];

  @Metadata({ data: "json, name=end_date" })
  endDate: Date;

  @Metadata({ data: "json, name=event_code" })
  eventCode: string;

  @Metadata({ data: "json, name=event_type" })
  eventType: number;

  @Metadata({ data: "json, name=event_type_string" })
  eventTypeString: string;

  @Metadata({ data: "json, name=first_event_code" })
  firstEventCode?: string;

  @Metadata({ data: "json, name=first_event_id" })
  firstEventId?: string;

  @Metadata({ data: "json, name=gmaps_place_id" })
  gmapsPlaceId?: string;

  @Metadata({ data: "json, name=gmaps_url" })
  gmapsUrl?: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;

  @Metadata({ data: "json, name=location_name" })
  locationName?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent_event_key" })
  parentEventKey?: string;

  @Metadata({ data: "json, name=playoff_type" })
  playoffType?: number;

  @Metadata({ data: "json, name=playoff_type_string" })
  playoffTypeString?: string;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=short_name" })
  shortName?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate: Date;

  @Metadata({ data: "json, name=state_prov" })
  stateProv?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=webcasts", elemType: shared.Webcast })
  webcasts?: Webcast[];

  @Metadata({ data: "json, name=website" })
  website?: string;

  @Metadata({ data: "json, name=week" })
  week?: number;

  @Metadata({ data: "json, name=year" })
  year: number;
}
