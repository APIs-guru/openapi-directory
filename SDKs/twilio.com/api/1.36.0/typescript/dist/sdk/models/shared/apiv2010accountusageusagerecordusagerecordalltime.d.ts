import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageRecordAllTimeEnumCategoryEnum } from "./usagerecordalltimeenumcategoryenum";
export declare class ApiV2010AccountUsageUsageRecordUsageRecordAllTime extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    asOf?: string;
    category?: UsageRecordAllTimeEnumCategoryEnum;
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
