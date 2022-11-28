import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecordYesterdayEnumCategoryEnum } from "./usagerecordyesterdayenumcategoryenum";
export declare class ApiV2010AccountUsageUsageRecordUsageRecordYesterday extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    asOf?: string;
    category?: UsageRecordYesterdayEnumCategoryEnum;
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
