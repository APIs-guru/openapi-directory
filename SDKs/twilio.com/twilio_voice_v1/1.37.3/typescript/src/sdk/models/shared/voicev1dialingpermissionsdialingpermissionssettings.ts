import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VoiceV1DialingPermissionsDialingPermissionsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dialing_permissions_inheritance" })
  dialingPermissionsInheritance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
