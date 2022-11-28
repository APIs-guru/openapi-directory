import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3VehicleDescriptor } from "./v3vehicledescriptor";
import { V3VehiclePosition } from "./v3vehicleposition";



export class V3Run extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination_name" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=direction_id" })
  directionId?: number;

  @SpeakeasyMetadata({ data: "json, name=express_stop_count" })
  expressStopCount?: number;

  @SpeakeasyMetadata({ data: "json, name=final_stop_id" })
  finalStopId?: number;

  @SpeakeasyMetadata({ data: "json, name=geopath" })
  geopath?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=route_id" })
  routeId?: number;

  @SpeakeasyMetadata({ data: "json, name=route_type" })
  routeType?: number;

  @SpeakeasyMetadata({ data: "json, name=run_id" })
  runId?: number;

  @SpeakeasyMetadata({ data: "json, name=run_ref" })
  runRef?: string;

  @SpeakeasyMetadata({ data: "json, name=run_sequence" })
  runSequence?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=vehicle_descriptor" })
  vehicleDescriptor?: V3VehicleDescriptor;

  @SpeakeasyMetadata({ data: "json, name=vehicle_position" })
  vehiclePosition?: V3VehiclePosition;
}
