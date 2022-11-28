import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListIpRecordServerList = [
	"https://voice.twilio.com",
] as const;


export class ListIpRecordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListIpRecordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIpRecordListIpRecordResponseMeta extends SpeakeasyBase {
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


export class ListIpRecordListIpRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_records", elemType: shared.VoiceV1IpRecord })
  ipRecords?: shared.VoiceV1IpRecord[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListIpRecordListIpRecordResponseMeta;
}


export class ListIpRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListIpRecordQueryParams;

  @SpeakeasyMetadata()
  security: ListIpRecordSecurity;
}


export class ListIpRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listIpRecordResponse?: ListIpRecordListIpRecordResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
