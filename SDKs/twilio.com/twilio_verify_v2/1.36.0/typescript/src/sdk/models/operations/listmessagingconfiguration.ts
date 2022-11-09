import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMESSAGINGCONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
];



export class ListMessagingConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListMessagingConfigurationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMessagingConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMessagingConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListMessagingConfigurationPathParams;

  @Metadata()
  queryParams: ListMessagingConfigurationQueryParams;

  @Metadata()
  security: ListMessagingConfigurationSecurity;
}


export class ListMessagingConfigurationListMessagingConfigurationResponseMeta extends SpeakeasyBase {
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


export class ListMessagingConfigurationListMessagingConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messaging_configurations", elemType: shared.VerifyV2ServiceMessagingConfiguration })
  messagingConfigurations?: shared.VerifyV2ServiceMessagingConfiguration[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListMessagingConfigurationListMessagingConfigurationResponseMeta;
}


export class ListMessagingConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMessagingConfigurationResponse?: ListMessagingConfigurationListMessagingConfigurationResponse;

  @Metadata()
  statusCode: number;
}
