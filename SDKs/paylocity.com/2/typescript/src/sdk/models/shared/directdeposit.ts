import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectDepositAdditionalDirectDeposit
/** 
 * The additional direct deposit model
**/
export class DirectDepositAdditionalDirectDeposit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=amountType" })
  amountType?: string;

  @SpeakeasyMetadata({ data: "json, name=blockSpecial" })
  blockSpecial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nameOnAccount" })
  nameOnAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @SpeakeasyMetadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// DirectDepositMainDirectDeposit
/** 
 * The main Direct Deposit account.
**/
export class DirectDepositMainDirectDeposit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=blockSpecial" })
  blockSpecial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nameOnAccount" })
  nameOnAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @SpeakeasyMetadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// DirectDeposit
/** 
 * The Direct Deposit model
**/
export class DirectDeposit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalDirectDeposit", elemType: DirectDepositAdditionalDirectDeposit })
  additionalDirectDeposit?: DirectDepositAdditionalDirectDeposit[];

  @SpeakeasyMetadata({ data: "json, name=mainDirectDeposit" })
  mainDirectDeposit?: DirectDepositMainDirectDeposit;
}
