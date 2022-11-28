import { SpeakeasyBase } from "../../../internal/utils";
import { SuperannuationCalculationTypeEnum } from "./superannuationcalculationtypeenum";
import { SuperannuationContributionTypeEnum } from "./superannuationcontributiontypeenum";
export declare class SuperLine extends SpeakeasyBase {
    amount?: number;
    calculationType?: SuperannuationCalculationTypeEnum;
    contributionType?: SuperannuationContributionTypeEnum;
    expenseAccountCode?: string;
    liabilityAccountCode?: string;
    minimumMonthlyEarnings?: number;
    percentage?: number;
    superMembershipId?: string;
}
