import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DistributionsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpStatus" })
  httpStatus?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}


export class DistributionsResponseResultElementsHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=fromEmail" })
  fromEmail?: any;

  @Metadata({ data: "json, name=fromName" })
  fromName?: any;

  @Metadata({ data: "json, name=replyToEmail" })
  replyToEmail?: any;
}


export class DistributionsResponseResultElementsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=libraryId" })
  libraryId?: any;

  @Metadata({ data: "json, name=messageId" })
  messageId?: any;

  @Metadata({ data: "json, name=messageText" })
  messageText?: any;
}


export class DistributionsResponseResultElementsRecipients extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactId" })
  contactId?: any;

  @Metadata({ data: "json, name=libraryId" })
  libraryId?: string;

  @Metadata({ data: "json, name=mailingListId" })
  mailingListId?: string;

  @Metadata({ data: "json, name=sampleId" })
  sampleId?: any;
}


export class DistributionsResponseResultElementsStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked?: number;

  @Metadata({ data: "json, name=bounced" })
  bounced?: number;

  @Metadata({ data: "json, name=complaints" })
  complaints?: number;

  @Metadata({ data: "json, name=failed" })
  failed?: number;

  @Metadata({ data: "json, name=finished" })
  finished?: number;

  @Metadata({ data: "json, name=opened" })
  opened?: number;

  @Metadata({ data: "json, name=sent" })
  sent?: number;

  @Metadata({ data: "json, name=skipped" })
  skipped?: number;

  @Metadata({ data: "json, name=started" })
  started?: number;
}


export class DistributionsResponseResultElementsSurveyLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

  @Metadata({ data: "json, name=linkType" })
  linkType?: string;

  @Metadata({ data: "json, name=surveyId" })
  surveyId?: string;
}


export class DistributionsResponseResultElements extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdDate" })
  createdDate: string;

  @Metadata({ data: "json, name=customHeaders" })
  customHeaders: Map<string, any>;

  @Metadata({ data: "json, name=embeddedData" })
  embeddedData: any;

  @Metadata({ data: "json, name=headers" })
  headers: DistributionsResponseResultElementsHeaders;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: DistributionsResponseResultElementsMessage;

  @Metadata({ data: "json, name=modifiedDate" })
  modifiedDate: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=ownerId" })
  ownerId: string;

  @Metadata({ data: "json, name=parentDistributionId" })
  parentDistributionId: any;

  @Metadata({ data: "json, name=recipients" })
  recipients: DistributionsResponseResultElementsRecipients;

  @Metadata({ data: "json, name=requestStatus" })
  requestStatus: string;

  @Metadata({ data: "json, name=requestType" })
  requestType: string;

  @Metadata({ data: "json, name=sendDate" })
  sendDate: string;

  @Metadata({ data: "json, name=stats" })
  stats: DistributionsResponseResultElementsStats;

  @Metadata({ data: "json, name=surveyLink" })
  surveyLink: DistributionsResponseResultElementsSurveyLink;
}


export class DistributionsResponseResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=elements", elemType: shared.DistributionsResponseResultElements })
  elements?: DistributionsResponseResultElements[];

  @Metadata({ data: "json, name=nextPage" })
  nextPage?: any;
}


export class DistributionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: DistributionsResponseMeta;

  @Metadata({ data: "json, name=result" })
  result?: DistributionsResponseResult;
}
