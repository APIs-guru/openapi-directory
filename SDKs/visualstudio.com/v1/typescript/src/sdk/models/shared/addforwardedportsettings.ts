import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddForwardedPortSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isPublic" })
  isPublic?: boolean;
}
