import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiVersion } from "./apiversion";



export class ApiVersions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all", elemType: ApiVersion })
  all?: ApiVersion[];

  @SpeakeasyMetadata({ data: "json, name=latest" })
  latest?: number;
}
