import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3Departure extends SpeakeasyBase {
  @Metadata({ data: "json, name=at_platform" })
  atPlatform?: boolean;

  @Metadata({ data: "json, name=departure_sequence" })
  departureSequence?: number;

  @Metadata({ data: "json, name=direction_id" })
  directionId?: number;

  @Metadata({ data: "json, name=disruption_ids" })
  disruptionIds?: number[];

  @Metadata({ data: "json, name=estimated_departure_utc" })
  estimatedDepartureUtc?: Date;

  @Metadata({ data: "json, name=flags" })
  flags?: string;

  @Metadata({ data: "json, name=platform_number" })
  platformNumber?: string;

  @Metadata({ data: "json, name=route_id" })
  routeId?: number;

  @Metadata({ data: "json, name=run_id" })
  runId?: number;

  @Metadata({ data: "json, name=run_ref" })
  runRef?: string;

  @Metadata({ data: "json, name=scheduled_departure_utc" })
  scheduledDepartureUtc?: Date;

  @Metadata({ data: "json, name=stop_id" })
  stopId?: number;
}
