import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProfileSpecifier } from "./profilespecifier";
import { ProfileSpecifier } from "./profilespecifier";


export class RefreshProfileTelemetryPropertiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failed", elemType: shared.ProfileSpecifier })
  failed?: ProfileSpecifier[];

  @Metadata({ data: "json, name=succeeded", elemType: shared.ProfileSpecifier })
  succeeded?: ProfileSpecifier[];
}
