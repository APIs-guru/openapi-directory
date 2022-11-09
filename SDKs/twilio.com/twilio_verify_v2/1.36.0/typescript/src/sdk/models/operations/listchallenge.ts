import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCHALLENGE_SERVERS = [
	"https://verify.twilio.com",
];



export class ListChallengePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListChallengeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FactorSid" })
  factorSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.ChallengeEnumListOrdersEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.ChallengeEnumChallengeStatusesEnum;
}


export class ListChallengeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListChallengeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListChallengePathParams;

  @Metadata()
  queryParams: ListChallengeQueryParams;

  @Metadata()
  security: ListChallengeSecurity;
}


export class ListChallengeListChallengeResponseMeta extends SpeakeasyBase {
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


export class ListChallengeListChallengeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=challenges", elemType: shared.VerifyV2ServiceEntityChallenge })
  challenges?: shared.VerifyV2ServiceEntityChallenge[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListChallengeListChallengeResponseMeta;
}


export class ListChallengeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listChallengeResponse?: ListChallengeListChallengeResponse;

  @Metadata()
  statusCode: number;
}
