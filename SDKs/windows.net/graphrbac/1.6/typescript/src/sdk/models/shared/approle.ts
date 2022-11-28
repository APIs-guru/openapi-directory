import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedMemberTypes" })
  allowedMemberTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
