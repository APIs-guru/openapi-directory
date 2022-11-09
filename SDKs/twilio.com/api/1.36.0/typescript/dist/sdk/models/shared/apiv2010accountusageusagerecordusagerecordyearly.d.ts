import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageRecordYearlyEnumCategoryEnum } from "./usagerecordyearlyenumcategoryenum";
export declare class ApiV2010AccountUsageUsageRecordUsageRecordYearly extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    asOf?: string;
    category?: UsageRecordYearlyEnumCategoryEnum;
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
