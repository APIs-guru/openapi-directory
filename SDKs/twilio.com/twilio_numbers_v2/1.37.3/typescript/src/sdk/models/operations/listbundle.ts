import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListBundleServerList = [
	"https://numbers.twilio.com",
] as const;


export class ListBundleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HasValidUntilDate" })
  hasValidUntilDate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsoCountry" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NumberType" })
  numberType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RegulationSid" })
  regulationSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SortBy" })
  sortBy?: shared.BundleEnumSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SortDirection" })
  sortDirection?: shared.BundleEnumSortDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.BundleEnumStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ValidUntilDate" })
  validUntilDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ValidUntilDate<" })
  validUntilDateLessThan?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ValidUntilDate>" })
  validUntilDateGreaterThan?: Date;
}


export class ListBundleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBundleListBundleResponseMeta extends SpeakeasyBase {
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


export class ListBundleListBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListBundleListBundleResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundle })
  results?: shared.NumbersV2RegulatoryComplianceBundle[];
}


export class ListBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListBundleQueryParams;

  @SpeakeasyMetadata()
  security: ListBundleSecurity;
}


export class ListBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listBundleResponse?: ListBundleListBundleResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
