import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListMessagingConfigurationServerList = [
	"https://verify.twilio.com",
] as const;


export class ListMessagingConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListMessagingConfigurationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMessagingConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMessagingConfigurationListMessagingConfigurationResponseMeta extends SpeakeasyBase {
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


export class ListMessagingConfigurationListMessagingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messaging_configurations", elemType: shared.VerifyV2ServiceMessagingConfiguration })
  messagingConfigurations?: shared.VerifyV2ServiceMessagingConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListMessagingConfigurationListMessagingConfigurationResponseMeta;
}


export class ListMessagingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListMessagingConfigurationPathParams;

  @SpeakeasyMetadata()
  queryParams: ListMessagingConfigurationQueryParams;

  @SpeakeasyMetadata()
  security: ListMessagingConfigurationSecurity;
}


export class ListMessagingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMessagingConfigurationResponse?: ListMessagingConfigurationListMessagingConfigurationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
