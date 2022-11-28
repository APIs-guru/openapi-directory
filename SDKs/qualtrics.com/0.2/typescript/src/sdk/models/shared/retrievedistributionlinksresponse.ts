import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrieveDistributionLinksResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpStatus" })
  httpStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}


export class RetrieveDistributionLinksResponseResultElements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactId" })
  contactId: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=exceededContactFrequency" })
  exceededContactFrequency: boolean;

  @SpeakeasyMetadata({ data: "json, name=externalDataReference" })
  externalDataReference: any;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=linkExpiration" })
  linkExpiration: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: any;

  @SpeakeasyMetadata({ data: "json, name=unsubscribed" })
  unsubscribed: boolean;
}


export class RetrieveDistributionLinksResponseResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elements", elemType: RetrieveDistributionLinksResponseResultElements })
  elements?: RetrieveDistributionLinksResponseResultElements[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: any;
}


export class RetrieveDistributionLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: RetrieveDistributionLinksResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: RetrieveDistributionLinksResponseResult;
}
