import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListMediaProcessorServerList = [
	"https://media.twilio.com",
] as const;


export class ListMediaProcessorQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.MediaProcessorEnumOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.MediaProcessorEnumStatusEnum;
}


export class ListMediaProcessorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMediaProcessorListMediaProcessorResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListMediaProcessorListMediaProcessorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=media_processors", elemType: shared.MediaV1MediaProcessor })
  mediaProcessors?: shared.MediaV1MediaProcessor[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListMediaProcessorListMediaProcessorResponseMeta;
}


export class ListMediaProcessorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListMediaProcessorQueryParams;

  @SpeakeasyMetadata()
  security: ListMediaProcessorSecurity;
}


export class ListMediaProcessorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMediaProcessorResponse?: ListMediaProcessorListMediaProcessorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
