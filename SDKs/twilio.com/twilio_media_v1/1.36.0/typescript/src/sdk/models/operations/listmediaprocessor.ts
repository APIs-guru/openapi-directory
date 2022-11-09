import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMEDIAPROCESSOR_SERVERS = [
	"https://media.twilio.com",
];



export class ListMediaProcessorQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.MediaProcessorEnumOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.MediaProcessorEnumStatusEnum;
}


export class ListMediaProcessorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMediaProcessorRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListMediaProcessorQueryParams;

  @Metadata()
  security: ListMediaProcessorSecurity;
}


export class ListMediaProcessorListMediaProcessorResponseMeta extends SpeakeasyBase {
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


export class ListMediaProcessorListMediaProcessorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=media_processors", elemType: shared.MediaV1MediaProcessor })
  mediaProcessors?: shared.MediaV1MediaProcessor[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListMediaProcessorListMediaProcessorResponseMeta;
}


export class ListMediaProcessorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMediaProcessorResponse?: ListMediaProcessorListMediaProcessorResponse;

  @Metadata()
  statusCode: number;
}
