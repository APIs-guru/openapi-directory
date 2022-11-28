import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3StopModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=route_type" })
  routeType?: number;

  @SpeakeasyMetadata({ data: "json, name=stop_distance" })
  stopDistance?: number;

  @SpeakeasyMetadata({ data: "json, name=stop_id" })
  stopId?: number;

  @SpeakeasyMetadata({ data: "json, name=stop_landmark" })
  stopLandmark?: string;

  @SpeakeasyMetadata({ data: "json, name=stop_latitude" })
  stopLatitude?: number;

  @SpeakeasyMetadata({ data: "json, name=stop_longitude" })
  stopLongitude?: number;

  @SpeakeasyMetadata({ data: "json, name=stop_name" })
  stopName?: string;

  @SpeakeasyMetadata({ data: "json, name=stop_sequence" })
  stopSequence?: number;

  @SpeakeasyMetadata({ data: "json, name=stop_suburb" })
  stopSuburb?: string;
}
