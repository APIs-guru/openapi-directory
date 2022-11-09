import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProvisioningStatusResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=completedSteps" })
  completedSteps?: number;

  @Metadata({ data: "json, name=currentStepDescription" })
  currentStepDescription?: string;

  @Metadata({ data: "json, name=isReady" })
  isReady?: boolean;

  @Metadata({ data: "json, name=operationStartedTimeUtc" })
  operationStartedTimeUtc?: string;

  @Metadata({ data: "json, name=totalSteps" })
  totalSteps?: number;
}
