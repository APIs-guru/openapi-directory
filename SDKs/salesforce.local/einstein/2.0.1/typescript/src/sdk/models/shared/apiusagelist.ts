import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiUsage } from "./apiusage";


export class ApiUsageList extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ApiUsage })
  data?: ApiUsage[];

  @Metadata({ data: "json, name=object" })
  object?: string;
}
