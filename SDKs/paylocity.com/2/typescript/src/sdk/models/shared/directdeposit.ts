import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// DirectDepositAdditionalDirectDeposit
/** 
 * The additional direct deposit model
**/
export class DirectDepositAdditionalDirectDeposit extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=accountType" })
  accountType?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=amountType" })
  amountType?: string;

  @Metadata({ data: "json, name=blockSpecial" })
  blockSpecial?: boolean;

  @Metadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @Metadata({ data: "json, name=nameOnAccount" })
  nameOnAccount?: string;

  @Metadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @Metadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// DirectDepositMainDirectDeposit
/** 
 * The main Direct Deposit account.
**/
export class DirectDepositMainDirectDeposit extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=accountType" })
  accountType?: string;

  @Metadata({ data: "json, name=blockSpecial" })
  blockSpecial?: boolean;

  @Metadata({ data: "json, name=isSkipPreNote" })
  isSkipPreNote?: boolean;

  @Metadata({ data: "json, name=nameOnAccount" })
  nameOnAccount?: string;

  @Metadata({ data: "json, name=preNoteDate" })
  preNoteDate?: string;

  @Metadata({ data: "json, name=routingNumber" })
  routingNumber?: string;
}


// DirectDeposit
/** 
 * The Direct Deposit model
**/
export class DirectDeposit extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalDirectDeposit", elemType: shared.DirectDepositAdditionalDirectDeposit })
  additionalDirectDeposit?: DirectDepositAdditionalDirectDeposit[];

  @Metadata({ data: "json, name=mainDirectDeposit" })
  mainDirectDeposit?: DirectDepositMainDirectDeposit;
}
