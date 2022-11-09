import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The benefit setup model
**/
export declare class BenefitSetup extends SpeakeasyBase {
    benefitClass?: string;
    benefitClassEffectiveDate?: string;
    benefitSalary?: number;
    benefitSalaryEffectiveDate?: string;
    doNotApplyAdministrativePeriod?: boolean;
    isMeasureAcaEligibility?: boolean;
}
