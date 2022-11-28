import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListChallengeServerList = [
	"https://verify.twilio.com",
] as const;


export class ListChallengePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListChallengeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FactorSid" })
  factorSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.ChallengeEnumListOrdersEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.ChallengeEnumChallengeStatusesEnum;
}


export class ListChallengeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListChallengeListChallengeResponseMeta extends SpeakeasyBase {
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


export class ListChallengeListChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=challenges", elemType: shared.VerifyV2ServiceEntityChallenge })
  challenges?: shared.VerifyV2ServiceEntityChallenge[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListChallengeListChallengeResponseMeta;
}


export class ListChallengeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListChallengePathParams;

  @SpeakeasyMetadata()
  queryParams: ListChallengeQueryParams;

  @SpeakeasyMetadata()
  security: ListChallengeSecurity;
}


export class ListChallengeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listChallengeResponse?: ListChallengeListChallengeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
