import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRecordEnumCategoryEnum } from "./usagerecordenumcategoryenum";
export declare class ApiV2010AccountUsageUsageRecord extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    asOf?: string;
    category?: UsageRecordEnumCategoryEnum;
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
