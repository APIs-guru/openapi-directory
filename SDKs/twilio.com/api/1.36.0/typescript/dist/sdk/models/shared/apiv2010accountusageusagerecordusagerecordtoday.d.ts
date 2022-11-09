import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageRecordTodayEnumCategoryEnum } from "./usagerecordtodayenumcategoryenum";
export declare class ApiV2010AccountUsageUsageRecordUsageRecordToday extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    asOf?: string;
    category?: UsageRecordTodayEnumCategoryEnum;
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
