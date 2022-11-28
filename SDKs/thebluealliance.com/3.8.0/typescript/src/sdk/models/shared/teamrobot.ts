import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamRobot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=robot_name" })
  robotName: string;

  @SpeakeasyMetadata({ data: "json, name=team_key" })
  teamKey: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: number;
}
