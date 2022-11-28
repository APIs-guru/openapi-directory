import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DistrictRankingEventPoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alliance_points" })
  alliancePoints: number;

  @SpeakeasyMetadata({ data: "json, name=award_points" })
  awardPoints: number;

  @SpeakeasyMetadata({ data: "json, name=district_cmp" })
  districtCmp: boolean;

  @SpeakeasyMetadata({ data: "json, name=elim_points" })
  elimPoints: number;

  @SpeakeasyMetadata({ data: "json, name=event_key" })
  eventKey: string;

  @SpeakeasyMetadata({ data: "json, name=qual_points" })
  qualPoints: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


// DistrictRanking
/** 
 * Rank of a team in a district.
**/
export class DistrictRanking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event_points", elemType: DistrictRankingEventPoints })
  eventPoints?: DistrictRankingEventPoints[];

  @SpeakeasyMetadata({ data: "json, name=point_total" })
  pointTotal: number;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank: number;

  @SpeakeasyMetadata({ data: "json, name=rookie_bonus" })
  rookieBonus?: number;

  @SpeakeasyMetadata({ data: "json, name=team_key" })
  teamKey: string;
}
