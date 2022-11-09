import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiVersionAll extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: any;

  @Metadata({ data: "json, name=version" })
  version: number;
}


export class ApiVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=all", elemType: shared.ApiVersionAll })
  all?: ApiVersionAll[];

  @Metadata({ data: "json, name=latest" })
  latest?: number;
}
