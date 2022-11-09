import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PayStatementSummary
/** 
 * The pay statement summary model
**/
export class PayStatementSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoPay" })
  autoPay?: boolean;

  @Metadata({ data: "json, name=beginDate" })
  beginDate?: string;

  @Metadata({ data: "json, name=checkDate" })
  checkDate?: string;

  @Metadata({ data: "json, name=checkNumber" })
  checkNumber?: number;

  @Metadata({ data: "json, name=directDepositAmount" })
  directDepositAmount?: number;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=grossPay" })
  grossPay?: number;

  @Metadata({ data: "json, name=hours" })
  hours?: number;

  @Metadata({ data: "json, name=netCheck" })
  netCheck?: number;

  @Metadata({ data: "json, name=netPay" })
  netPay?: number;

  @Metadata({ data: "json, name=overtimeDollars" })
  overtimeDollars?: number;

  @Metadata({ data: "json, name=overtimeHours" })
  overtimeHours?: number;

  @Metadata({ data: "json, name=process" })
  process?: number;

  @Metadata({ data: "json, name=regularDollars" })
  regularDollars?: number;

  @Metadata({ data: "json, name=regularHours" })
  regularHours?: number;

  @Metadata({ data: "json, name=transactionNumber" })
  transactionNumber?: number;

  @Metadata({ data: "json, name=voucherNumber" })
  voucherNumber?: number;

  @Metadata({ data: "json, name=workersCompCode" })
  workersCompCode?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
