import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListRegulationServerList = [
	"https://numbers.twilio.com",
] as const;


export class ListRegulationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndUserType" })
  endUserType?: shared.RegulationEnumEndUserTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsoCountry" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NumberType" })
  numberType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRegulationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRegulationListRegulationResponseMeta extends SpeakeasyBase {
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


export class ListRegulationListRegulationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListRegulationListRegulationResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.NumbersV2RegulatoryComplianceRegulation })
  results?: shared.NumbersV2RegulatoryComplianceRegulation[];
}


export class ListRegulationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListRegulationQueryParams;

  @SpeakeasyMetadata()
  security: ListRegulationSecurity;
}


export class ListRegulationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listRegulationResponse?: ListRegulationListRegulationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
