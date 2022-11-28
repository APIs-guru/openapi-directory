import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListFactorServerList = [
	"https://verify.twilio.com",
] as const;


export class ListFactorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListFactorQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFactorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFactorListFactorResponseMeta extends SpeakeasyBase {
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


export class ListFactorListFactorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=factors", elemType: shared.VerifyV2ServiceEntityFactor })
  factors?: shared.VerifyV2ServiceEntityFactor[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListFactorListFactorResponseMeta;
}


export class ListFactorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListFactorPathParams;

  @SpeakeasyMetadata()
  queryParams: ListFactorQueryParams;

  @SpeakeasyMetadata()
  security: ListFactorSecurity;
}


export class ListFactorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFactorResponse?: ListFactorListFactorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
