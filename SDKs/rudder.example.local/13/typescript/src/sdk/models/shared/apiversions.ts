import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiVersion } from "./apiversion";


export class ApiVersions extends SpeakeasyBase {
  @Metadata({ data: "json, name=all", elemType: shared.ApiVersion })
  all?: ApiVersion[];

  @Metadata({ data: "json, name=latest" })
  latest?: number;
}
