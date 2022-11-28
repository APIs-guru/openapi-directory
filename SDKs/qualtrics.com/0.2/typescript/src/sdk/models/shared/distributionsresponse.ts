import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DistributionsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpStatus" })
  httpStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}


export class DistributionsResponseResultElementsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromEmail" })
  fromEmail?: any;

  @SpeakeasyMetadata({ data: "json, name=fromName" })
  fromName?: any;

  @SpeakeasyMetadata({ data: "json, name=replyToEmail" })
  replyToEmail?: any;
}


export class DistributionsResponseResultElementsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=libraryId" })
  libraryId?: any;

  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId?: any;

  @SpeakeasyMetadata({ data: "json, name=messageText" })
  messageText?: any;
}


export class DistributionsResponseResultElementsRecipients extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactId" })
  contactId?: any;

  @SpeakeasyMetadata({ data: "json, name=libraryId" })
  libraryId?: string;

  @SpeakeasyMetadata({ data: "json, name=mailingListId" })
  mailingListId?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleId" })
  sampleId?: any;
}


export class DistributionsResponseResultElementsStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked?: number;

  @SpeakeasyMetadata({ data: "json, name=bounced" })
  bounced?: number;

  @SpeakeasyMetadata({ data: "json, name=complaints" })
  complaints?: number;

  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished?: number;

  @SpeakeasyMetadata({ data: "json, name=opened" })
  opened?: number;

  @SpeakeasyMetadata({ data: "json, name=sent" })
  sent?: number;

  @SpeakeasyMetadata({ data: "json, name=skipped" })
  skipped?: number;

  @SpeakeasyMetadata({ data: "json, name=started" })
  started?: number;
}


export class DistributionsResponseResultElementsSurveyLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=linkType" })
  linkType?: string;

  @SpeakeasyMetadata({ data: "json, name=surveyId" })
  surveyId?: string;
}


export class DistributionsResponseResultElements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate: string;

  @SpeakeasyMetadata({ data: "json, name=customHeaders" })
  customHeaders: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=embeddedData" })
  embeddedData: any;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers: DistributionsResponseResultElementsHeaders;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: DistributionsResponseResultElementsMessage;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=ownerId" })
  ownerId: string;

  @SpeakeasyMetadata({ data: "json, name=parentDistributionId" })
  parentDistributionId: any;

  @SpeakeasyMetadata({ data: "json, name=recipients" })
  recipients: DistributionsResponseResultElementsRecipients;

  @SpeakeasyMetadata({ data: "json, name=requestStatus" })
  requestStatus: string;

  @SpeakeasyMetadata({ data: "json, name=requestType" })
  requestType: string;

  @SpeakeasyMetadata({ data: "json, name=sendDate" })
  sendDate: string;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats: DistributionsResponseResultElementsStats;

  @SpeakeasyMetadata({ data: "json, name=surveyLink" })
  surveyLink: DistributionsResponseResultElementsSurveyLink;
}


export class DistributionsResponseResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elements", elemType: DistributionsResponseResultElements })
  elements?: DistributionsResponseResultElements[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: any;
}


export class DistributionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: DistributionsResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: DistributionsResponseResult;
}
