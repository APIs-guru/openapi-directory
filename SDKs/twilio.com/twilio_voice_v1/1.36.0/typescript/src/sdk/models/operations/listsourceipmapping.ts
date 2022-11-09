import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSOURCEIPMAPPING_SERVERS = [
	"https://voice.twilio.com",
];



export class ListSourceIpMappingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSourceIpMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSourceIpMappingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListSourceIpMappingQueryParams;

  @Metadata()
  security: ListSourceIpMappingSecurity;
}


export class ListSourceIpMappingListSourceIpMappingResponseMeta extends SpeakeasyBase {
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


export class ListSourceIpMappingListSourceIpMappingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSourceIpMappingListSourceIpMappingResponseMeta;

  @Metadata({ data: "json, name=source_ip_mappings", elemType: shared.VoiceV1SourceIpMapping })
  sourceIpMappings?: shared.VoiceV1SourceIpMapping[];
}


export class ListSourceIpMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSourceIpMappingResponse?: ListSourceIpMappingListSourceIpMappingResponse;

  @Metadata()
  statusCode: number;
}
