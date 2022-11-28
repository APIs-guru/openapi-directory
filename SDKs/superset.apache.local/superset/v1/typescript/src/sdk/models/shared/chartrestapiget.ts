import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta9 } from "./meta9";
import { Meta10 } from "./meta10";



export class ChartRestApiGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=dashboards" })
  dashboards?: Meta9;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: Meta10;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: string;

  @SpeakeasyMetadata({ data: "json, name=query_context" })
  queryContext?: string;

  @SpeakeasyMetadata({ data: "json, name=slice_name" })
  sliceName?: string;

  @SpeakeasyMetadata({ data: "json, name=viz_type" })
  vizType?: string;
}
