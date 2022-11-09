import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserSetupProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=completedSteps" })
  completedSteps?: string[];

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
