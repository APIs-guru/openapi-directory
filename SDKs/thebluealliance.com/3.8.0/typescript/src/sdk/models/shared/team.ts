import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Team extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=gmaps_place_id" })
  gmapsPlaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=gmaps_url" })
  gmapsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=home_championship" })
  homeChampionship?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;

  @SpeakeasyMetadata({ data: "json, name=location_name" })
  locationName?: string;

  @SpeakeasyMetadata({ data: "json, name=motto" })
  motto?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=rookie_year" })
  rookieYear?: number;

  @SpeakeasyMetadata({ data: "json, name=school_name" })
  schoolName?: string;

  @SpeakeasyMetadata({ data: "json, name=state_prov" })
  stateProv?: string;

  @SpeakeasyMetadata({ data: "json, name=team_number" })
  teamNumber: number;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
