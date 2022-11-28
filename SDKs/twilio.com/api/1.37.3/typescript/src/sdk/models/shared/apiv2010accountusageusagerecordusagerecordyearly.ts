import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageRecordYearlyEnumCategoryEnum } from "./usagerecordyearlyenumcategoryenum";



export class ApiV2010AccountUsageUsageRecordUsageRecordYearly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=as_of" })
  asOf?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: UsageRecordYearlyEnumCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=count_unit" })
  countUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: string;

  @SpeakeasyMetadata({ data: "json, name=usage_unit" })
  usageUnit?: string;
}
