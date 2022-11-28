import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3StopAccessibilityWheelchair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessible_ramp" })
  accessibleRamp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=low_ticket_counter" })
  lowTicketCounter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=manouvering" })
  manouvering?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parking" })
  parking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=raised_platform" })
  raisedPlatform?: boolean;

  @SpeakeasyMetadata({ data: "json, name=raised_platform_shelther" })
  raisedPlatformShelther?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ramp" })
  ramp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=secondary_path" })
  secondaryPath?: boolean;

  @SpeakeasyMetadata({ data: "json, name=steep_ramp" })
  steepRamp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=telephone" })
  telephone?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toilet" })
  toilet?: boolean;
}
