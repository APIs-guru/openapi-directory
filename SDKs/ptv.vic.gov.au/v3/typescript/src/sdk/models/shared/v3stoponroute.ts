import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3StopTicket } from "./v3stopticket";


export class V3StopOnRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=disruption_ids" })
  disruptionIds?: number[];

  @Metadata({ data: "json, name=route_type" })
  routeType?: number;

  @Metadata({ data: "json, name=stop_id" })
  stopId?: number;

  @Metadata({ data: "json, name=stop_landmark" })
  stopLandmark?: string;

  @Metadata({ data: "json, name=stop_latitude" })
  stopLatitude?: number;

  @Metadata({ data: "json, name=stop_longitude" })
  stopLongitude?: number;

  @Metadata({ data: "json, name=stop_name" })
  stopName?: string;

  @Metadata({ data: "json, name=stop_sequence" })
  stopSequence?: number;

  @Metadata({ data: "json, name=stop_suburb" })
  stopSuburb?: string;

  @Metadata({ data: "json, name=stop_ticket" })
  stopTicket?: V3StopTicket;
}
