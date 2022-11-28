import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSourceIpMappingServerList = [
	"https://voice.twilio.com",
] as const;


export class ListSourceIpMappingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSourceIpMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSourceIpMappingListSourceIpMappingResponseMeta extends SpeakeasyBase {
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


export class ListSourceIpMappingListSourceIpMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSourceIpMappingListSourceIpMappingResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=source_ip_mappings", elemType: shared.VoiceV1SourceIpMapping })
  sourceIpMappings?: shared.VoiceV1SourceIpMapping[];
}


export class ListSourceIpMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListSourceIpMappingQueryParams;

  @SpeakeasyMetadata()
  security: ListSourceIpMappingSecurity;
}


export class ListSourceIpMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSourceIpMappingResponse?: ListSourceIpMappingListSourceIpMappingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
