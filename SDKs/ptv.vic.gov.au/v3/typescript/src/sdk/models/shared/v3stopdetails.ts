import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3StopAccessibility } from "./v3stopaccessibility";
import { V3StopAmenityDetails } from "./v3stopamenitydetails";
import { V3StopLocation } from "./v3stoplocation";
import { V3StopStaffing } from "./v3stopstaffing";


export class V3StopDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=disruption_ids" })
  disruptionIds?: number[];

  @Metadata({ data: "json, name=route_type" })
  routeType?: number;

  @Metadata({ data: "json, name=routes" })
  routes?: Map<string, any>[];

  @Metadata({ data: "json, name=station_description" })
  stationDescription?: string;

  @Metadata({ data: "json, name=station_type" })
  stationType?: string;

  @Metadata({ data: "json, name=stop_accessibility" })
  stopAccessibility?: V3StopAccessibility;

  @Metadata({ data: "json, name=stop_amenities" })
  stopAmenities?: V3StopAmenityDetails;

  @Metadata({ data: "json, name=stop_id" })
  stopId?: number;

  @Metadata({ data: "json, name=stop_landmark" })
  stopLandmark?: string;

  @Metadata({ data: "json, name=stop_location" })
  stopLocation?: V3StopLocation;

  @Metadata({ data: "json, name=stop_name" })
  stopName?: string;

  @Metadata({ data: "json, name=stop_staffing" })
  stopStaffing?: V3StopStaffing;
}
