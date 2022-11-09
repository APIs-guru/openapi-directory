import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EventDistrictPointsPoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=alliance_points" })
  alliancePoints: number;

  @Metadata({ data: "json, name=award_points" })
  awardPoints: number;

  @Metadata({ data: "json, name=elim_points" })
  elimPoints: number;

  @Metadata({ data: "json, name=qual_points" })
  qualPoints: number;

  @Metadata({ data: "json, name=total" })
  total: number;
}


export class EventDistrictPointsTiebreakers extends SpeakeasyBase {
  @Metadata({ data: "json, name=highest_qual_scores" })
  highestQualScores?: number[];

  @Metadata({ data: "json, name=qual_wins" })
  qualWins?: number;
}


export class EventDistrictPoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=points", elemType: shared.EventDistrictPointsPoints })
  points: Map<string, EventDistrictPointsPoints>;

  @Metadata({ data: "json, name=tiebreakers", elemType: shared.EventDistrictPointsTiebreakers })
  tiebreakers?: Map<string, EventDistrictPointsTiebreakers>;
}
