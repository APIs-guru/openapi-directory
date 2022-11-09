import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CategoryMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=last24Hours" })
  last24Hours?: number;

  @Metadata({ data: "json, name=lastAlert" })
  lastAlert?: Date;

  @Metadata({ data: "json, name=subscriberCount" })
  subscriberCount?: number;
}
