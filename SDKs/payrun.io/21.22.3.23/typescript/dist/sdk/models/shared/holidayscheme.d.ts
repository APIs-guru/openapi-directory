import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The holiday schemes' accrual pay codes
**/
export declare class HolidaySchemeHolidaySchemeAccrualPayCodes extends SpeakeasyBase {
    payCode?: string[];
}
export declare class HolidaySchemeHolidayScheme extends SpeakeasyBase {
    accrualPayCodes?: HolidaySchemeHolidaySchemeAccrualPayCodes;
    allowNegativeBalance?: boolean;
    annualEntitlementWeeks?: number;
    bankHolidayInclusive?: boolean;
    code?: string;
    effectiveDate?: Date;
    maxCarryOverDays?: number;
    revision?: number;
    schemeCeasedDate?: Date;
    schemeKey?: string;
    schemeName?: string;
    yearStartDay?: number;
    yearStartMonth?: number;
}
export declare class HolidayScheme extends SpeakeasyBase {
    holidayScheme?: HolidaySchemeHolidayScheme;
}
