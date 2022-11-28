import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecordLastMonthEnumCategoryEnum } from "./usagerecordlastmonthenumcategoryenum";
export declare class ApiV2010AccountUsageUsageRecordUsageRecordLastMonth extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    asOf?: string;
    category?: UsageRecordLastMonthEnumCategoryEnum;
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
