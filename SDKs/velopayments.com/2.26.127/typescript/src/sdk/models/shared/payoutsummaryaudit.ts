import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FxSummary } from "./fxsummary";
import { PayoutTypeEnum } from "./payouttypeenum";
import { SourceAccountSummary } from "./sourceaccountsummary";
import { PayoutStatusEnum } from "./payoutstatusenum";



export class PayoutSummaryAudit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=fxSummaries", elemType: FxSummary })
  fxSummaries?: FxSummary[];

  @SpeakeasyMetadata({ data: "json, name=instructedDateTime" })
  instructedDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "json, name=payorName" })
  payorName: string;

  @SpeakeasyMetadata({ data: "json, name=payoutId" })
  payoutId?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutMemo" })
  payoutMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutType" })
  payoutType: PayoutTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceAccountSummary", elemType: SourceAccountSummary })
  sourceAccountSummary?: SourceAccountSummary[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PayoutStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=submittedDateTime" })
  submittedDateTime: string;

  @SpeakeasyMetadata({ data: "json, name=totalIncompletePayments" })
  totalIncompletePayments?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPayments" })
  totalPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=totalReturnedPayments" })
  totalReturnedPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=totalWithdrawnPayments" })
  totalWithdrawnPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=withdrawnDateTime" })
  withdrawnDateTime?: Date;
}
