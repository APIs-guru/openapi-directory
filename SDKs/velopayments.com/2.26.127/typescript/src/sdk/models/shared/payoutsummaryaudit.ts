import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FxSummary } from "./fxsummary";
import { PayoutTypeEnum } from "./payouttypeenum";
import { SourceAccountSummary } from "./sourceaccountsummary";
import { PayoutStatusEnum } from "./payoutstatusenum";


export class PayoutSummaryAudit extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @Metadata({ data: "json, name=fxSummaries", elemType: shared.FxSummary })
  fxSummaries?: FxSummary[];

  @Metadata({ data: "json, name=instructedDateTime" })
  instructedDateTime?: string;

  @Metadata({ data: "json, name=payorId" })
  payorId?: string;

  @Metadata({ data: "json, name=payorName" })
  payorName: string;

  @Metadata({ data: "json, name=payoutId" })
  payoutId?: string;

  @Metadata({ data: "json, name=payoutMemo" })
  payoutMemo?: string;

  @Metadata({ data: "json, name=payoutType" })
  payoutType: PayoutTypeEnum;

  @Metadata({ data: "json, name=sourceAccountSummary", elemType: shared.SourceAccountSummary })
  sourceAccountSummary?: SourceAccountSummary[];

  @Metadata({ data: "json, name=status" })
  status: PayoutStatusEnum;

  @Metadata({ data: "json, name=submittedDateTime" })
  submittedDateTime: string;

  @Metadata({ data: "json, name=totalIncompletePayments" })
  totalIncompletePayments?: number;

  @Metadata({ data: "json, name=totalPayments" })
  totalPayments?: number;

  @Metadata({ data: "json, name=totalReturnedPayments" })
  totalReturnedPayments?: number;

  @Metadata({ data: "json, name=totalWithdrawnPayments" })
  totalWithdrawnPayments?: number;

  @Metadata({ data: "json, name=withdrawnDateTime" })
  withdrawnDateTime?: Date;
}
