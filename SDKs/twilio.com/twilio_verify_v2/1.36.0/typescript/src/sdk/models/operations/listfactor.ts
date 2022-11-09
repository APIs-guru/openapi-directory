import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFACTOR_SERVERS = [
	"https://verify.twilio.com",
];



export class ListFactorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListFactorQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFactorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFactorRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListFactorPathParams;

  @Metadata()
  queryParams: ListFactorQueryParams;

  @Metadata()
  security: ListFactorSecurity;
}


export class ListFactorListFactorResponseMeta extends SpeakeasyBase {
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


export class ListFactorListFactorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=factors", elemType: shared.VerifyV2ServiceEntityFactor })
  factors?: shared.VerifyV2ServiceEntityFactor[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListFactorListFactorResponseMeta;
}


export class ListFactorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFactorResponse?: ListFactorListFactorResponse;

  @Metadata()
  statusCode: number;
}
