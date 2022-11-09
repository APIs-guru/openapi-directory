import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CisTransactionCisTransactionCisMessageTypeEnum {
    Verification = "Verification"
,    Return = "Return"
}


// CisTransactionCisTransactionEmployerCore
/** 
 * The cis transactions' employer core
**/
export class CisTransactionCisTransactionEmployerCore extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum CisTransactionCisTransactionTransactionStatusEnum {
    New = "New"
,    RequestGenerated = "RequestGenerated"
,    CompletedWithError = "CompletedWithError"
,    CompletedWithSuccess = "CompletedWithSuccess"
,    TimeOut = "TimeOut"
}


export class CisTransactionCisTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=CisMessageType" })
  cisMessageType?: CisTransactionCisTransactionCisMessageTypeEnum;

  @Metadata({ data: "json, name=EmployerCore" })
  employerCore?: CisTransactionCisTransactionEmployerCore;

  @Metadata({ data: "json, name=RequestData" })
  requestData?: string;

  @Metadata({ data: "json, name=ResponseData" })
  responseData?: string;

  @Metadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=TransactionStatus" })
  transactionStatus?: CisTransactionCisTransactionTransactionStatusEnum;

  @Metadata({ data: "json, name=TransmissionDate" })
  transmissionDate?: Date;
}


export class CisTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=CisTransaction" })
  cisTransaction?: CisTransactionCisTransaction;
}
