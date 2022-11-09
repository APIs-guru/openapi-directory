import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3VehicleDescriptor } from "./v3vehicledescriptor";
import { V3VehiclePosition } from "./v3vehicleposition";


export class V3Run extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination_name" })
  destinationName?: string;

  @Metadata({ data: "json, name=direction_id" })
  directionId?: number;

  @Metadata({ data: "json, name=express_stop_count" })
  expressStopCount?: number;

  @Metadata({ data: "json, name=final_stop_id" })
  finalStopId?: number;

  @Metadata({ data: "json, name=geopath" })
  geopath?: Map<string, any>[];

  @Metadata({ data: "json, name=route_id" })
  routeId?: number;

  @Metadata({ data: "json, name=route_type" })
  routeType?: number;

  @Metadata({ data: "json, name=run_id" })
  runId?: number;

  @Metadata({ data: "json, name=run_ref" })
  runRef?: string;

  @Metadata({ data: "json, name=run_sequence" })
  runSequence?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=vehicle_descriptor" })
  vehicleDescriptor?: V3VehicleDescriptor;

  @Metadata({ data: "json, name=vehicle_position" })
  vehiclePosition?: V3VehiclePosition;
}
