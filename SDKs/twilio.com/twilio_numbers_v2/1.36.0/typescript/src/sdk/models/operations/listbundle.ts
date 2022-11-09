import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTBUNDLE_SERVERS = [
	"https://numbers.twilio.com",
];



export class ListBundleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HasValidUntilDate" })
  hasValidUntilDate?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IsoCountry" })
  isoCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NumberType" })
  numberType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RegulationSid" })
  regulationSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SortBy" })
  sortBy?: shared.BundleEnumSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SortDirection" })
  sortDirection?: shared.BundleEnumSortDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.BundleEnumStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ValidUntilDate" })
  validUntilDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ValidUntilDate<" })
  validUntilDateLessThan?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ValidUntilDate>" })
  validUntilDateGreaterThan?: Date;
}


export class ListBundleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListBundleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListBundleQueryParams;

  @Metadata()
  security: ListBundleSecurity;
}


export class ListBundleListBundleResponseMeta extends SpeakeasyBase {
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


export class ListBundleListBundleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListBundleListBundleResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceBundle })
  results?: shared.NumbersV2RegulatoryComplianceBundle[];
}


export class ListBundleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBundleResponse?: ListBundleListBundleResponse;

  @Metadata()
  statusCode: number;
}
