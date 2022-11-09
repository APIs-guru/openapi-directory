import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Team extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=gmaps_place_id" })
  gmapsPlaceId?: string;

  @Metadata({ data: "json, name=gmaps_url" })
  gmapsUrl?: string;

  @Metadata({ data: "json, name=home_championship" })
  homeChampionship?: Map<string, any>;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;

  @Metadata({ data: "json, name=location_name" })
  locationName?: string;

  @Metadata({ data: "json, name=motto" })
  motto?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=nickname" })
  nickname?: string;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=rookie_year" })
  rookieYear?: number;

  @Metadata({ data: "json, name=school_name" })
  schoolName?: string;

  @Metadata({ data: "json, name=state_prov" })
  stateProv?: string;

  @Metadata({ data: "json, name=team_number" })
  teamNumber: number;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
