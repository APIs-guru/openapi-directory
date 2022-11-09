import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BenefitSetup
/** 
 * The benefit setup model
**/
export class BenefitSetup extends SpeakeasyBase {
  @Metadata({ data: "json, name=benefitClass" })
  benefitClass?: string;

  @Metadata({ data: "json, name=benefitClassEffectiveDate" })
  benefitClassEffectiveDate?: string;

  @Metadata({ data: "json, name=benefitSalary" })
  benefitSalary?: number;

  @Metadata({ data: "json, name=benefitSalaryEffectiveDate" })
  benefitSalaryEffectiveDate?: string;

  @Metadata({ data: "json, name=doNotApplyAdministrativePeriod" })
  doNotApplyAdministrativePeriod?: boolean;

  @Metadata({ data: "json, name=isMeasureAcaEligibility" })
  isMeasureAcaEligibility?: boolean;
}
