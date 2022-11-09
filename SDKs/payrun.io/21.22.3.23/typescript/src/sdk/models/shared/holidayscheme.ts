import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HolidaySchemeHolidaySchemeAccrualPayCodes
/** 
 * The holiday schemes' accrual pay codes
**/
export class HolidaySchemeHolidaySchemeAccrualPayCodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=PayCode" })
  payCode?: string[];
}


export class HolidaySchemeHolidayScheme extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccrualPayCodes" })
  accrualPayCodes?: HolidaySchemeHolidaySchemeAccrualPayCodes;

  @Metadata({ data: "json, name=AllowNegativeBalance" })
  allowNegativeBalance?: boolean;

  @Metadata({ data: "json, name=AnnualEntitlementWeeks" })
  annualEntitlementWeeks?: number;

  @Metadata({ data: "json, name=BankHolidayInclusive" })
  bankHolidayInclusive?: boolean;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=MaxCarryOverDays" })
  maxCarryOverDays?: number;

  @Metadata({ data: "json, name=Revision" })
  revision?: number;

  @Metadata({ data: "json, name=SchemeCeasedDate" })
  schemeCeasedDate?: Date;

  @Metadata({ data: "json, name=SchemeKey" })
  schemeKey?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName?: string;

  @Metadata({ data: "json, name=YearStartDay" })
  yearStartDay?: number;

  @Metadata({ data: "json, name=YearStartMonth" })
  yearStartMonth?: number;
}


export class HolidayScheme extends SpeakeasyBase {
  @Metadata({ data: "json, name=HolidayScheme" })
  holidayScheme?: HolidaySchemeHolidayScheme;
}
