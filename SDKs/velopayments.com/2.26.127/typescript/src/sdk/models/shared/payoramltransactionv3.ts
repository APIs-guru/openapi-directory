import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayorAmlTransactionV3 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  credit?: number;

  @SpeakeasyMetadata()
  creditCurrency?: string;

  @SpeakeasyMetadata()
  dateFundingRequested?: string;

  @SpeakeasyMetadata()
  debit?: number;

  @SpeakeasyMetadata()
  debitCurrency?: string;

  @SpeakeasyMetadata()
  fundingType?: string;

  @SpeakeasyMetadata()
  fxApplied?: number;

  @SpeakeasyMetadata()
  payeeType?: string;

  @SpeakeasyMetadata()
  paymentAmount?: number;

  @SpeakeasyMetadata()
  paymentCurrency?: string;

  @SpeakeasyMetadata()
  paymentMemo?: string;

  @SpeakeasyMetadata()
  paymentRails?: string;

  @SpeakeasyMetadata()
  paymentStatus?: string;

  @SpeakeasyMetadata()
  payorPaymentId?: string;

  @SpeakeasyMetadata()
  rejectReason?: string;

  @SpeakeasyMetadata()
  remoteId?: string;

  @SpeakeasyMetadata()
  reportTransactionType?: string;

  @SpeakeasyMetadata()
  returnCode?: string;

  @SpeakeasyMetadata()
  returnDescription?: string;

  @SpeakeasyMetadata()
  returnFee?: string;

  @SpeakeasyMetadata()
  returnFeeCurrency?: string;

  @SpeakeasyMetadata()
  returnFeeDescription?: string;

  @SpeakeasyMetadata()
  sourceAccount?: string;

  @SpeakeasyMetadata()
  transactionDate?: Date;

  @SpeakeasyMetadata()
  transactionTime?: string;
}
