import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HolidaySchemeHolidaySchemeAccrualPayCodes
/** 
 * The holiday schemes' accrual pay codes
**/
export class HolidaySchemeHolidaySchemeAccrualPayCodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PayCode" })
  payCode?: string[];
}


export class HolidaySchemeHolidayScheme extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccrualPayCodes" })
  accrualPayCodes?: HolidaySchemeHolidaySchemeAccrualPayCodes;

  @SpeakeasyMetadata({ data: "json, name=AllowNegativeBalance" })
  allowNegativeBalance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AnnualEntitlementWeeks" })
  annualEntitlementWeeks?: number;

  @SpeakeasyMetadata({ data: "json, name=BankHolidayInclusive" })
  bankHolidayInclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxCarryOverDays" })
  maxCarryOverDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=SchemeCeasedDate" })
  schemeCeasedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=SchemeKey" })
  schemeKey?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;

  @SpeakeasyMetadata({ data: "json, name=YearStartDay" })
  yearStartDay?: number;

  @SpeakeasyMetadata({ data: "json, name=YearStartMonth" })
  yearStartMonth?: number;
}


export class HolidayScheme extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HolidayScheme" })
  holidayScheme?: HolidaySchemeHolidayScheme;
}
