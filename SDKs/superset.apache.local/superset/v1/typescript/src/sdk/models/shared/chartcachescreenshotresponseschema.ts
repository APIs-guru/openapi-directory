import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChartCacheScreenshotResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=cache_key" })
  cacheKey?: string;

  @Metadata({ data: "json, name=chart_url" })
  chartUrl?: string;

  @Metadata({ data: "json, name=image_url" })
  imageUrl?: string;
}
