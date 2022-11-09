import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTACCOUNTUSAGERECORD_SERVERS = [
	"https://wireless.twilio.com",
];



export class ListAccountUsageRecordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=End" })
  end?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Granularity" })
  granularity?: shared.AccountUsageRecordEnumGranularityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Start" })
  start?: Date;
}


export class ListAccountUsageRecordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAccountUsageRecordRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListAccountUsageRecordQueryParams;

  @Metadata()
  security: ListAccountUsageRecordSecurity;
}


export class ListAccountUsageRecordListAccountUsageRecordResponseMeta extends SpeakeasyBase {
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


export class ListAccountUsageRecordListAccountUsageRecordResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListAccountUsageRecordListAccountUsageRecordResponseMeta;

  @Metadata({ data: "json, name=usage_records", elemType: shared.WirelessV1AccountUsageRecord })
  usageRecords?: shared.WirelessV1AccountUsageRecord[];
}


export class ListAccountUsageRecordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAccountUsageRecordResponse?: ListAccountUsageRecordListAccountUsageRecordResponse;

  @Metadata()
  statusCode: number;
}
