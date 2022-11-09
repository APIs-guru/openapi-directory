import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiCommonJourneyPlannerJpElevation extends SpeakeasyBase {
  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=endLat" })
  endLat?: number;

  @Metadata({ data: "json, name=endLon" })
  endLon?: number;

  @Metadata({ data: "json, name=gradient" })
  gradient?: number;

  @Metadata({ data: "json, name=heightFromPreviousPoint" })
  heightFromPreviousPoint?: number;

  @Metadata({ data: "json, name=startLat" })
  startLat?: number;

  @Metadata({ data: "json, name=startLon" })
  startLon?: number;
}
