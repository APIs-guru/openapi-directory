import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUsageRecordServerList = [
	"https://supersim.twilio.com",
] as const;


export class ListUsageRecordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Fleet" })
  fleet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Granularity" })
  granularity?: shared.UsageRecordEnumGranularityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Group" })
  group?: shared.UsageRecordEnumGroupEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsoCountry" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Network" })
  network?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Sim" })
  sim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: Date;
}


export class ListUsageRecordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUsageRecordListUsageRecordResponseMeta extends SpeakeasyBase {
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


export class ListUsageRecordListUsageRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListUsageRecordListUsageRecordResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=usage_records", elemType: shared.SupersimV1UsageRecord })
  usageRecords?: shared.SupersimV1UsageRecord[];
}


export class ListUsageRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListUsageRecordQueryParams;

  @SpeakeasyMetadata()
  security: ListUsageRecordSecurity;
}


export class ListUsageRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUsageRecordResponse?: ListUsageRecordListUsageRecordResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
