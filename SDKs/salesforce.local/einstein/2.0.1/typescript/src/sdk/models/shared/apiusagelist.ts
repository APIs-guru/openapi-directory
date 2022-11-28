import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiUsage } from "./apiusage";



export class ApiUsageList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ApiUsage })
  data?: ApiUsage[];

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
