import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3StopAccessibility } from "./v3stopaccessibility";
import { V3StopAmenityDetails } from "./v3stopamenitydetails";
import { V3StopLocation } from "./v3stoplocation";
import { V3StopStaffing } from "./v3stopstaffing";



export class V3StopDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disruption_ids" })
  disruptionIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=route_type" })
  routeType?: number;

  @SpeakeasyMetadata({ data: "json, name=routes" })
  routes?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=station_description" })
  stationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=station_type" })
  stationType?: string;

  @SpeakeasyMetadata({ data: "json, name=stop_accessibility" })
  stopAccessibility?: V3StopAccessibility;

  @SpeakeasyMetadata({ data: "json, name=stop_amenities" })
  stopAmenities?: V3StopAmenityDetails;

  @SpeakeasyMetadata({ data: "json, name=stop_id" })
  stopId?: number;

  @SpeakeasyMetadata({ data: "json, name=stop_landmark" })
  stopLandmark?: string;

  @SpeakeasyMetadata({ data: "json, name=stop_location" })
  stopLocation?: V3StopLocation;

  @SpeakeasyMetadata({ data: "json, name=stop_name" })
  stopName?: string;

  @SpeakeasyMetadata({ data: "json, name=stop_staffing" })
  stopStaffing?: V3StopStaffing;
}
