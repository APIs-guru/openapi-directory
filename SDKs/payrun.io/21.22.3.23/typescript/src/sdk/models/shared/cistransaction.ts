import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CisTransactionCisTransactionCisMessageTypeEnum {
    Verification = "Verification",
    Return = "Return"
}


// CisTransactionCisTransactionEmployerCore
/** 
 * The cis transactions' employer core
**/
export class CisTransactionCisTransactionEmployerCore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum CisTransactionCisTransactionTransactionStatusEnum {
    New = "New",
    RequestGenerated = "RequestGenerated",
    CompletedWithError = "CompletedWithError",
    CompletedWithSuccess = "CompletedWithSuccess",
    TimeOut = "TimeOut"
}


export class CisTransactionCisTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CisMessageType" })
  cisMessageType?: CisTransactionCisTransactionCisMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EmployerCore" })
  employerCore?: CisTransactionCisTransactionEmployerCore;

  @SpeakeasyMetadata({ data: "json, name=RequestData" })
  requestData?: string;

  @SpeakeasyMetadata({ data: "json, name=ResponseData" })
  responseData?: string;

  @SpeakeasyMetadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransactionStatus" })
  transactionStatus?: CisTransactionCisTransactionTransactionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TransmissionDate" })
  transmissionDate?: Date;
}


export class CisTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CisTransaction" })
  cisTransaction?: CisTransactionCisTransaction;
}
