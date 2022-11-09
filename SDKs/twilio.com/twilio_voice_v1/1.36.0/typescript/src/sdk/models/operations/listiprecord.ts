import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTIPRECORD_SERVERS = [
	"https://voice.twilio.com",
];



export class ListIpRecordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListIpRecordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIpRecordRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListIpRecordQueryParams;

  @Metadata()
  security: ListIpRecordSecurity;
}


export class ListIpRecordListIpRecordResponseMeta extends SpeakeasyBase {
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


export class ListIpRecordListIpRecordResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_records", elemType: shared.VoiceV1IpRecord })
  ipRecords?: shared.VoiceV1IpRecord[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListIpRecordListIpRecordResponseMeta;
}


export class ListIpRecordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listIpRecordResponse?: ListIpRecordListIpRecordResponse;

  @Metadata()
  statusCode: number;
}
