import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserSetupProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completedSteps" })
  completedSteps?: string[];

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
