import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventDistrictPointsPoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alliance_points" })
  alliancePoints: number;

  @SpeakeasyMetadata({ data: "json, name=award_points" })
  awardPoints: number;

  @SpeakeasyMetadata({ data: "json, name=elim_points" })
  elimPoints: number;

  @SpeakeasyMetadata({ data: "json, name=qual_points" })
  qualPoints: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class EventDistrictPointsTiebreakers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=highest_qual_scores" })
  highestQualScores?: number[];

  @SpeakeasyMetadata({ data: "json, name=qual_wins" })
  qualWins?: number;
}


export class EventDistrictPoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=points", elemType: EventDistrictPointsPoints })
  points: Map<string, EventDistrictPointsPoints>;

  @SpeakeasyMetadata({ data: "json, name=tiebreakers", elemType: EventDistrictPointsTiebreakers })
  tiebreakers?: Map<string, EventDistrictPointsTiebreakers>;
}
