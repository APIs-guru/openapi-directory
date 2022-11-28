import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListEsimProfileServerList = [
	"https://supersim.twilio.com",
] as const;


export class ListEsimProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Eid" })
  eid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SimSid" })
  simSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.EsimProfileEnumStatusEnum;
}


export class ListEsimProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEsimProfileListEsimProfileResponseMeta extends SpeakeasyBase {
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


export class ListEsimProfileListEsimProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=esim_profiles", elemType: shared.SupersimV1EsimProfile })
  esimProfiles?: shared.SupersimV1EsimProfile[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListEsimProfileListEsimProfileResponseMeta;
}


export class ListEsimProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListEsimProfileQueryParams;

  @SpeakeasyMetadata()
  security: ListEsimProfileSecurity;
}


export class ListEsimProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listEsimProfileResponse?: ListEsimProfileListEsimProfileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
