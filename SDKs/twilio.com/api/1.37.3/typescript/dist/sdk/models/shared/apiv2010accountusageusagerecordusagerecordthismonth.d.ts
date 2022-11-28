import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecordThisMonthEnumCategoryEnum } from "./usagerecordthismonthenumcategoryenum";
export declare class ApiV2010AccountUsageUsageRecordUsageRecordThisMonth extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    asOf?: string;
    category?: UsageRecordThisMonthEnumCategoryEnum;
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
