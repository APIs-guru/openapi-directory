import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta9 } from "./meta9";
import { Meta10 } from "./meta10";


export class ChartRestApiGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @Metadata({ data: "json, name=dashboards" })
  dashboards?: Meta9;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=owners" })
  owners?: Meta10;

  @Metadata({ data: "json, name=params" })
  params?: string;

  @Metadata({ data: "json, name=query_context" })
  queryContext?: string;

  @Metadata({ data: "json, name=slice_name" })
  sliceName?: string;

  @Metadata({ data: "json, name=viz_type" })
  vizType?: string;
}
