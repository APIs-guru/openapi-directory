import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamRobot extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=robot_name" })
  robotName: string;

  @Metadata({ data: "json, name=team_key" })
  teamKey: string;

  @Metadata({ data: "json, name=year" })
  year: number;
}
