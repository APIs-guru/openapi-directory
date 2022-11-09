import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTESIMPROFILE_SERVERS = [
	"https://supersim.twilio.com",
];



export class ListEsimProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Eid" })
  eid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SimSid" })
  simSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.EsimProfileEnumStatusEnum;
}


export class ListEsimProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListEsimProfileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListEsimProfileQueryParams;

  @Metadata()
  security: ListEsimProfileSecurity;
}


export class ListEsimProfileListEsimProfileResponseMeta extends SpeakeasyBase {
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


export class ListEsimProfileListEsimProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=esim_profiles", elemType: shared.SupersimV1EsimProfile })
  esimProfiles?: shared.SupersimV1EsimProfile[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListEsimProfileListEsimProfileResponseMeta;
}


export class ListEsimProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEsimProfileResponse?: ListEsimProfileListEsimProfileResponse;

  @Metadata()
  statusCode: number;
}
