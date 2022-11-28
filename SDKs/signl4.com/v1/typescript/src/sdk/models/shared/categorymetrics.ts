import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoryMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=last24Hours" })
  last24Hours?: number;

  @SpeakeasyMetadata({ data: "json, name=lastAlert" })
  lastAlert?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscriberCount" })
  subscriberCount?: number;
}
