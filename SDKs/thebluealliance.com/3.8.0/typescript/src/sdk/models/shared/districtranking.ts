import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DistrictRankingEventPoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=alliance_points" })
  alliancePoints: number;

  @Metadata({ data: "json, name=award_points" })
  awardPoints: number;

  @Metadata({ data: "json, name=district_cmp" })
  districtCmp: boolean;

  @Metadata({ data: "json, name=elim_points" })
  elimPoints: number;

  @Metadata({ data: "json, name=event_key" })
  eventKey: string;

  @Metadata({ data: "json, name=qual_points" })
  qualPoints: number;

  @Metadata({ data: "json, name=total" })
  total: number;
}


// DistrictRanking
/** 
 * Rank of a team in a district.
**/
export class DistrictRanking extends SpeakeasyBase {
  @Metadata({ data: "json, name=event_points", elemType: shared.DistrictRankingEventPoints })
  eventPoints?: DistrictRankingEventPoints[];

  @Metadata({ data: "json, name=point_total" })
  pointTotal: number;

  @Metadata({ data: "json, name=rank" })
  rank: number;

  @Metadata({ data: "json, name=rookie_bonus" })
  rookieBonus?: number;

  @Metadata({ data: "json, name=team_key" })
  teamKey: string;
}
