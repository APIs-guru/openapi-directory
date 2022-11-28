import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProvisioningStatusResult extends SpeakeasyBase {
    completedSteps?: number;
    currentStepDescription?: string;
    isReady?: boolean;
    operationStartedTimeUtc?: string;
    totalSteps?: number;
}
