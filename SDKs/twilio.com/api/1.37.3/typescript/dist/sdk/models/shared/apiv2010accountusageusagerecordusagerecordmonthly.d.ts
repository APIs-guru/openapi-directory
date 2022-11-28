import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecordMonthlyEnumCategoryEnum } from "./usagerecordmonthlyenumcategoryenum";
export declare class ApiV2010AccountUsageUsageRecordUsageRecordMonthly extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    asOf?: string;
    category?: UsageRecordMonthlyEnumCategoryEnum;
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
