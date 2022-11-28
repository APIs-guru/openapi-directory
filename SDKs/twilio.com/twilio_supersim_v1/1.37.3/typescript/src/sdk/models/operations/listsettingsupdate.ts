import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSettingsUpdateServerList = [
	"https://supersim.twilio.com",
] as const;


export class ListSettingsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Sim" })
  sim?: string;
}


export class ListSettingsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSettingsUpdateListSettingsUpdateResponseMeta extends SpeakeasyBase {
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


export class ListSettingsUpdateListSettingsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListSettingsUpdateListSettingsUpdateResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=settings_updates", elemType: shared.SupersimV1SettingsUpdate })
  settingsUpdates?: shared.SupersimV1SettingsUpdate[];
}


export class ListSettingsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListSettingsUpdateQueryParams;

  @SpeakeasyMetadata()
  security: ListSettingsUpdateSecurity;
}


export class ListSettingsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSettingsUpdateResponse?: ListSettingsUpdateListSettingsUpdateResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
