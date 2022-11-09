import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTRANSCRIPTION_SERVERS = [
	"https://api.twilio.com",
];



export class ListTranscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListTranscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListTranscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTranscriptionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListTranscriptionPathParams;

  @Metadata()
  queryParams: ListTranscriptionQueryParams;

  @Metadata()
  security: ListTranscriptionSecurity;
}


export class ListTranscriptionListTranscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=transcriptions", elemType: shared.ApiV2010AccountTranscription })
  transcriptions?: shared.ApiV2010AccountTranscription[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListTranscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTranscriptionResponse?: ListTranscriptionListTranscriptionResponse;

  @Metadata()
  statusCode: number;
}
