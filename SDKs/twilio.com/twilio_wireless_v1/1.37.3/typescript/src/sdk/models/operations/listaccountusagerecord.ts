import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListAccountUsageRecordServerList = [
	"https://wireless.twilio.com",
] as const;


export class ListAccountUsageRecordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=End" })
  end?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Granularity" })
  granularity?: shared.AccountUsageRecordEnumGranularityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Start" })
  start?: Date;
}


export class ListAccountUsageRecordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAccountUsageRecordListAccountUsageRecordResponseMeta extends SpeakeasyBase {
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


export class ListAccountUsageRecordListAccountUsageRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListAccountUsageRecordListAccountUsageRecordResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=usage_records", elemType: shared.WirelessV1AccountUsageRecord })
  usageRecords?: shared.WirelessV1AccountUsageRecord[];
}


export class ListAccountUsageRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListAccountUsageRecordQueryParams;

  @SpeakeasyMetadata()
  security: ListAccountUsageRecordSecurity;
}


export class ListAccountUsageRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAccountUsageRecordResponse?: ListAccountUsageRecordListAccountUsageRecordResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
