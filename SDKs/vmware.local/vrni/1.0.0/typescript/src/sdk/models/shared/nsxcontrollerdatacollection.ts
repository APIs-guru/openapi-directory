import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NsxControllerDataCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=controller_password" })
  controllerPassword?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
