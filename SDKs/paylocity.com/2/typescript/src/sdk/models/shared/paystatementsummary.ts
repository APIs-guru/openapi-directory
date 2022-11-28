import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PayStatementSummary
/** 
 * The pay statement summary model
**/
export class PayStatementSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoPay" })
  autoPay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=beginDate" })
  beginDate?: string;

  @SpeakeasyMetadata({ data: "json, name=checkDate" })
  checkDate?: string;

  @SpeakeasyMetadata({ data: "json, name=checkNumber" })
  checkNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=directDepositAmount" })
  directDepositAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=grossPay" })
  grossPay?: number;

  @SpeakeasyMetadata({ data: "json, name=hours" })
  hours?: number;

  @SpeakeasyMetadata({ data: "json, name=netCheck" })
  netCheck?: number;

  @SpeakeasyMetadata({ data: "json, name=netPay" })
  netPay?: number;

  @SpeakeasyMetadata({ data: "json, name=overtimeDollars" })
  overtimeDollars?: number;

  @SpeakeasyMetadata({ data: "json, name=overtimeHours" })
  overtimeHours?: number;

  @SpeakeasyMetadata({ data: "json, name=process" })
  process?: number;

  @SpeakeasyMetadata({ data: "json, name=regularDollars" })
  regularDollars?: number;

  @SpeakeasyMetadata({ data: "json, name=regularHours" })
  regularHours?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionNumber" })
  transactionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=voucherNumber" })
  voucherNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=workersCompCode" })
  workersCompCode?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
