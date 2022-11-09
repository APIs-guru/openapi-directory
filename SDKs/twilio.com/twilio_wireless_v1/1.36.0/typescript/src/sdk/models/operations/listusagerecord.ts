import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUSAGERECORD_SERVERS = [
	"https://wireless.twilio.com",
];



export class ListUsageRecordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SimSid" })
  simSid: string;
}


export class ListUsageRecordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=End" })
  end?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Granularity" })
  granularity?: shared.UsageRecordEnumGranularityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Start" })
  start?: Date;
}


export class ListUsageRecordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUsageRecordRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUsageRecordPathParams;

  @Metadata()
  queryParams: ListUsageRecordQueryParams;

  @Metadata()
  security: ListUsageRecordSecurity;
}


export class ListUsageRecordListUsageRecordResponseMeta extends SpeakeasyBase {
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


export class ListUsageRecordListUsageRecordResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListUsageRecordListUsageRecordResponseMeta;

  @Metadata({ data: "json, name=usage_records", elemType: shared.WirelessV1SimUsageRecord })
  usageRecords?: shared.WirelessV1SimUsageRecord[];
}


export class ListUsageRecordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUsageRecordResponse?: ListUsageRecordListUsageRecordResponse;

  @Metadata()
  statusCode: number;
}
