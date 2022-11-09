import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamSetupProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=completedSteps" })
  completedSteps?: string[];

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
