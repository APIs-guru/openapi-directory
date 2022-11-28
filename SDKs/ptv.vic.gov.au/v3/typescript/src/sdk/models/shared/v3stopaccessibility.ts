import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3StopAccessibilityWheelchair } from "./v3stopaccessibilitywheelchair";



export class V3StopAccessibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_customer_information" })
  audioCustomerInformation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=escalator" })
  escalator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hearing_loop" })
  hearingLoop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lift" })
  lift?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lighting" })
  lighting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=platform_number" })
  platformNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=stairs" })
  stairs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stop_accessible" })
  stopAccessible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tactile_ground_surface_indicator" })
  tactileGroundSurfaceIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=wheelchair" })
  wheelchair?: V3StopAccessibilityWheelchair;
}
