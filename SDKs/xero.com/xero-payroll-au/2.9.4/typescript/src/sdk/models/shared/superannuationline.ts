import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuperannuationCalculationTypeEnum } from "./superannuationcalculationtypeenum";
import { SuperannuationContributionTypeEnum } from "./superannuationcontributiontypeenum";



export class SuperannuationLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=CalculationType" })
  calculationType?: SuperannuationCalculationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ContributionType" })
  contributionType?: SuperannuationContributionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ExpenseAccountCode" })
  expenseAccountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=LiabilityAccountCode" })
  liabilityAccountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumMonthlyEarnings" })
  minimumMonthlyEarnings?: number;

  @SpeakeasyMetadata({ data: "json, name=PaymentDateForThisPeriod" })
  paymentDateForThisPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=Percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=SuperMembershipID" })
  superMembershipId?: string;
}
