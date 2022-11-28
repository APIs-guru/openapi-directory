import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3StopModel } from "./v3stopmodel";



export class V3PatternDeparture extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=at_platform" })
  atPlatform?: boolean;

  @SpeakeasyMetadata({ data: "json, name=departure_sequence" })
  departureSequence?: number;

  @SpeakeasyMetadata({ data: "json, name=direction_id" })
  directionId?: number;

  @SpeakeasyMetadata({ data: "json, name=disruption_ids" })
  disruptionIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=estimated_departure_utc" })
  estimatedDepartureUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=flags" })
  flags?: string;

  @SpeakeasyMetadata({ data: "json, name=platform_number" })
  platformNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=route_id" })
  routeId?: number;

  @SpeakeasyMetadata({ data: "json, name=run_id" })
  runId?: number;

  @SpeakeasyMetadata({ data: "json, name=run_ref" })
  runRef?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduled_departure_utc" })
  scheduledDepartureUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=skipped_stops", elemType: V3StopModel })
  skippedStops?: V3StopModel[];

  @SpeakeasyMetadata({ data: "json, name=stop_id" })
  stopId?: number;
}
