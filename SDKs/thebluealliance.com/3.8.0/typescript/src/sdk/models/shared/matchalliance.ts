import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MatchAlliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dq_team_keys" })
  dqTeamKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=score" })
  score: number;

  @SpeakeasyMetadata({ data: "json, name=surrogate_team_keys" })
  surrogateTeamKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=team_keys" })
  teamKeys: string[];
}
