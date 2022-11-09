import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VoiceV1DialingPermissionsDialingPermissionsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=dialing_permissions_inheritance" })
  dialingPermissionsInheritance?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
