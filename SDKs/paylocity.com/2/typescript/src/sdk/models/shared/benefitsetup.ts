import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BenefitSetup
/** 
 * The benefit setup model
**/
export class BenefitSetup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benefitClass" })
  benefitClass?: string;

  @SpeakeasyMetadata({ data: "json, name=benefitClassEffectiveDate" })
  benefitClassEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=benefitSalary" })
  benefitSalary?: number;

  @SpeakeasyMetadata({ data: "json, name=benefitSalaryEffectiveDate" })
  benefitSalaryEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=doNotApplyAdministrativePeriod" })
  doNotApplyAdministrativePeriod?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isMeasureAcaEligibility" })
  isMeasureAcaEligibility?: boolean;
}
