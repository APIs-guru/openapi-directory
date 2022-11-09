import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3StopAccessibilityWheelchair extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessible_ramp" })
  accessibleRamp?: boolean;

  @Metadata({ data: "json, name=low_ticket_counter" })
  lowTicketCounter?: boolean;

  @Metadata({ data: "json, name=manouvering" })
  manouvering?: boolean;

  @Metadata({ data: "json, name=parking" })
  parking?: boolean;

  @Metadata({ data: "json, name=raised_platform" })
  raisedPlatform?: boolean;

  @Metadata({ data: "json, name=raised_platform_shelther" })
  raisedPlatformShelther?: boolean;

  @Metadata({ data: "json, name=ramp" })
  ramp?: boolean;

  @Metadata({ data: "json, name=secondary_path" })
  secondaryPath?: boolean;

  @Metadata({ data: "json, name=steep_ramp" })
  steepRamp?: boolean;

  @Metadata({ data: "json, name=telephone" })
  telephone?: boolean;

  @Metadata({ data: "json, name=toilet" })
  toilet?: boolean;
}
