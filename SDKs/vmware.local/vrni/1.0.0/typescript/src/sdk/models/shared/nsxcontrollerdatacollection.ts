import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NsxControllerDataCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controller_password" })
  controllerPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
