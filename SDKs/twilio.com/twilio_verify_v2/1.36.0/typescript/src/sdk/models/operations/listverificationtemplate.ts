import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTVERIFICATIONTEMPLATE_SERVERS = [
	"https://verify.twilio.com",
];



export class ListVerificationTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListVerificationTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListVerificationTemplateRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListVerificationTemplateQueryParams;

  @Metadata()
  security: ListVerificationTemplateSecurity;
}


export class ListVerificationTemplateListVerificationTemplateResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListVerificationTemplateListVerificationTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListVerificationTemplateListVerificationTemplateResponseMeta;

  @Metadata({ data: "json, name=templates", elemType: shared.VerifyV2VerificationTemplate })
  templates?: shared.VerifyV2VerificationTemplate[];
}


export class ListVerificationTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listVerificationTemplateResponse?: ListVerificationTemplateListVerificationTemplateResponse;

  @Metadata()
  statusCode: number;
}
