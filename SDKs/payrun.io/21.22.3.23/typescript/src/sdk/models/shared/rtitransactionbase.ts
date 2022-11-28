import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RtiTransactionBaseRtiTransactionBaseEmployerCore
/** 
 * The rti transaction bases' employer core
**/
export class RtiTransactionBaseRtiTransactionBaseEmployerCore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum {
    New = "New",
    RequestGenerated = "RequestGenerated",
    CompletedWithError = "CompletedWithError",
    CompletedWithSuccess = "CompletedWithSuccess",
    TimeOut = "TimeOut"
}


export class RtiTransactionBaseRtiTransactionBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmployerCore" })
  employerCore?: RtiTransactionBaseRtiTransactionBaseEmployerCore;

  @SpeakeasyMetadata({ data: "json, name=RequestData" })
  requestData?: string;

  @SpeakeasyMetadata({ data: "json, name=ResponseData" })
  responseData?: string;

  @SpeakeasyMetadata({ data: "json, name=RtiType" })
  rtiType?: string;

  @SpeakeasyMetadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransactionStatus" })
  transactionStatus?: RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TransmissionDate" })
  transmissionDate?: Date;
}


export class RtiTransactionBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RtiTransactionBase" })
  rtiTransactionBase?: RtiTransactionBaseRtiTransactionBase;
}
