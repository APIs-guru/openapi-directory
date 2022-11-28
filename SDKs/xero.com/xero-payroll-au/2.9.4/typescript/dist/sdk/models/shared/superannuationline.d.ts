import { SpeakeasyBase } from "../../../internal/utils";
import { SuperannuationCalculationTypeEnum } from "./superannuationcalculationtypeenum";
import { SuperannuationContributionTypeEnum } from "./superannuationcontributiontypeenum";
export declare class SuperannuationLine extends SpeakeasyBase {
    amount?: number;
    calculationType?: SuperannuationCalculationTypeEnum;
    contributionType?: SuperannuationContributionTypeEnum;
    expenseAccountCode?: string;
    liabilityAccountCode?: string;
    minimumMonthlyEarnings?: number;
    paymentDateForThisPeriod?: string;
    percentage?: number;
    superMembershipId?: string;
}
