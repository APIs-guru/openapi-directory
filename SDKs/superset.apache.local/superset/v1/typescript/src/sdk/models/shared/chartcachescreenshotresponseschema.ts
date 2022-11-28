import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChartCacheScreenshotResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cache_key" })
  cacheKey?: string;

  @SpeakeasyMetadata({ data: "json, name=chart_url" })
  chartUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl?: string;
}
