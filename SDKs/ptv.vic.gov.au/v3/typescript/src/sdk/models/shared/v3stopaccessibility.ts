import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3StopAccessibilityWheelchair } from "./v3stopaccessibilitywheelchair";


export class V3StopAccessibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio_customer_information" })
  audioCustomerInformation?: boolean;

  @Metadata({ data: "json, name=escalator" })
  escalator?: boolean;

  @Metadata({ data: "json, name=hearing_loop" })
  hearingLoop?: boolean;

  @Metadata({ data: "json, name=lift" })
  lift?: boolean;

  @Metadata({ data: "json, name=lighting" })
  lighting?: boolean;

  @Metadata({ data: "json, name=platform_number" })
  platformNumber?: number;

  @Metadata({ data: "json, name=stairs" })
  stairs?: boolean;

  @Metadata({ data: "json, name=stop_accessible" })
  stopAccessible?: boolean;

  @Metadata({ data: "json, name=tactile_ground_surface_indicator" })
  tactileGroundSurfaceIndicator?: boolean;

  @Metadata({ data: "json, name=waiting_room" })
  waitingRoom?: boolean;

  @Metadata({ data: "json, name=wheelchair" })
  wheelchair?: V3StopAccessibilityWheelchair;
}
