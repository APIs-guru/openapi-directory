import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiCommonJourneyPlannerJpElevation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=endLat" })
  endLat?: number;

  @SpeakeasyMetadata({ data: "json, name=endLon" })
  endLon?: number;

  @SpeakeasyMetadata({ data: "json, name=gradient" })
  gradient?: number;

  @SpeakeasyMetadata({ data: "json, name=heightFromPreviousPoint" })
  heightFromPreviousPoint?: number;

  @SpeakeasyMetadata({ data: "json, name=startLat" })
  startLat?: number;

  @SpeakeasyMetadata({ data: "json, name=startLon" })
  startLon?: number;
}
