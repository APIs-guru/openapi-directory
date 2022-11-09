import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTREGULATION_SERVERS = [
	"https://numbers.twilio.com",
];



export class ListRegulationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EndUserType" })
  endUserType?: shared.RegulationEnumEndUserTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IsoCountry" })
  isoCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NumberType" })
  numberType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRegulationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRegulationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListRegulationQueryParams;

  @Metadata()
  security: ListRegulationSecurity;
}


export class ListRegulationListRegulationResponseMeta extends SpeakeasyBase {
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


export class ListRegulationListRegulationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListRegulationListRegulationResponseMeta;

  @Metadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceRegulation })
  results?: shared.NumbersV2RegulatoryComplianceRegulation[];
}


export class ListRegulationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRegulationResponse?: ListRegulationListRegulationResponse;

  @Metadata()
  statusCode: number;
}
