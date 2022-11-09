import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageRecordAllTimeEnumCategoryEnum } from "./usagerecordalltimeenumcategoryenum";


export class ApiV2010AccountUsageUsageRecordUsageRecordAllTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=as_of" })
  asOf?: string;

  @Metadata({ data: "json, name=category" })
  category?: UsageRecordAllTimeEnumCategoryEnum;

  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=count_unit" })
  countUnit?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=end_date" })
  endDate?: Date;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: Date;

  @Metadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=usage" })
  usage?: string;

  @Metadata({ data: "json, name=usage_unit" })
  usageUnit?: string;
}
