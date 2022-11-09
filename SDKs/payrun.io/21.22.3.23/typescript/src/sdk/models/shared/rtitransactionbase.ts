import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RtiTransactionBaseRtiTransactionBaseEmployerCore
/** 
 * The rti transaction bases' employer core
**/
export class RtiTransactionBaseRtiTransactionBaseEmployerCore extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum {
    New = "New"
,    RequestGenerated = "RequestGenerated"
,    CompletedWithError = "CompletedWithError"
,    CompletedWithSuccess = "CompletedWithSuccess"
,    TimeOut = "TimeOut"
}


export class RtiTransactionBaseRtiTransactionBase extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmployerCore" })
  employerCore?: RtiTransactionBaseRtiTransactionBaseEmployerCore;

  @Metadata({ data: "json, name=RequestData" })
  requestData?: string;

  @Metadata({ data: "json, name=ResponseData" })
  responseData?: string;

  @Metadata({ data: "json, name=RtiType" })
  rtiType?: string;

  @Metadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=TransactionStatus" })
  transactionStatus?: RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum;

  @Metadata({ data: "json, name=TransmissionDate" })
  transmissionDate?: Date;
}


export class RtiTransactionBase extends SpeakeasyBase {
  @Metadata({ data: "json, name=RtiTransactionBase" })
  rtiTransactionBase?: RtiTransactionBaseRtiTransactionBase;
}
