import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MatchAlliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=dq_team_keys" })
  dqTeamKeys?: string[];

  @Metadata({ data: "json, name=score" })
  score: number;

  @Metadata({ data: "json, name=surrogate_team_keys" })
  surrogateTeamKeys?: string[];

  @Metadata({ data: "json, name=team_keys" })
  teamKeys: string[];
}
