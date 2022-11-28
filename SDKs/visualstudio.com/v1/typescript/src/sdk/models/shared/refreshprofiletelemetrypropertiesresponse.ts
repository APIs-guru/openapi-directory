import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfileSpecifier } from "./profilespecifier";



export class RefreshProfileTelemetryPropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failed", elemType: ProfileSpecifier })
  failed?: ProfileSpecifier[];

  @SpeakeasyMetadata({ data: "json, name=succeeded", elemType: ProfileSpecifier })
  succeeded?: ProfileSpecifier[];
}
