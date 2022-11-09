import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveDistributionLinksResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpStatus" })
  httpStatus?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}


export class RetrieveDistributionLinksResponseResultElements extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactId" })
  contactId: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=exceededContactFrequency" })
  exceededContactFrequency: boolean;

  @Metadata({ data: "json, name=externalDataReference" })
  externalDataReference: any;

  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=linkExpiration" })
  linkExpiration: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: any;

  @Metadata({ data: "json, name=unsubscribed" })
  unsubscribed: boolean;
}


export class RetrieveDistributionLinksResponseResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=elements", elemType: shared.RetrieveDistributionLinksResponseResultElements })
  elements?: RetrieveDistributionLinksResponseResultElements[];

  @Metadata({ data: "json, name=nextPage" })
  nextPage?: any;
}


export class RetrieveDistributionLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: RetrieveDistributionLinksResponseMeta;

  @Metadata({ data: "json, name=result" })
  result?: RetrieveDistributionLinksResponseResult;
}
