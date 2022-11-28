import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProvisioningStatusResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completedSteps" })
  completedSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=currentStepDescription" })
  currentStepDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=isReady" })
  isReady?: boolean;

  @SpeakeasyMetadata({ data: "json, name=operationStartedTimeUtc" })
  operationStartedTimeUtc?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSteps" })
  totalSteps?: number;
}
