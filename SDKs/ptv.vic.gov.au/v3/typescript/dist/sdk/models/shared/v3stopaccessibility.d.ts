import { SpeakeasyBase } from "../../../internal/utils";
import { V3StopAccessibilityWheelchair } from "./v3stopaccessibilitywheelchair";
export declare class V3StopAccessibility extends SpeakeasyBase {
    audioCustomerInformation?: boolean;
    escalator?: boolean;
    hearingLoop?: boolean;
    lift?: boolean;
    lighting?: boolean;
    platformNumber?: number;
    stairs?: boolean;
    stopAccessible?: boolean;
    tactileGroundSurfaceIndicator?: boolean;
    waitingRoom?: boolean;
    wheelchair?: V3StopAccessibilityWheelchair;
}
