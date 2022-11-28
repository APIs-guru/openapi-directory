import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamSetupProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completedSteps" })
  completedSteps?: string[];

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
