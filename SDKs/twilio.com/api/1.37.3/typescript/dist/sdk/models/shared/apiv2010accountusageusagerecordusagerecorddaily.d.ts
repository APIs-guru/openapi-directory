import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecordDailyEnumCategoryEnum } from "./usagerecorddailyenumcategoryenum";
export declare class ApiV2010AccountUsageUsageRecordUsageRecordDaily extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    asOf?: string;
    category?: UsageRecordDailyEnumCategoryEnum;
    count?: string;
    countUnit?: string;
    description?: string;
    endDate?: Date;
    price?: number;
    priceUnit?: string;
    startDate?: Date;
    subresourceUris?: Map<string, any>;
    uri?: string;
    usage?: string;
    usageUnit?: string;
}
