import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuperannuationCalculationTypeEnum } from "./superannuationcalculationtypeenum";
import { SuperannuationContributionTypeEnum } from "./superannuationcontributiontypeenum";


export class SuperLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount?: number;

  @Metadata({ data: "json, name=CalculationType" })
  calculationType?: SuperannuationCalculationTypeEnum;

  @Metadata({ data: "json, name=ContributionType" })
  contributionType?: SuperannuationContributionTypeEnum;

  @Metadata({ data: "json, name=ExpenseAccountCode" })
  expenseAccountCode?: string;

  @Metadata({ data: "json, name=LiabilityAccountCode" })
  liabilityAccountCode?: string;

  @Metadata({ data: "json, name=MinimumMonthlyEarnings" })
  minimumMonthlyEarnings?: number;

  @Metadata({ data: "json, name=Percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=SuperMembershipID" })
  superMembershipId?: string;
}
