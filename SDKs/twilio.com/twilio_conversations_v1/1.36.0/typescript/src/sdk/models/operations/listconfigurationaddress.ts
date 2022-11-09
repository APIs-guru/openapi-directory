import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONFIGURATIONADDRESS_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListConfigurationAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Type" })
  type?: string;
}


export class ListConfigurationAddressSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConfigurationAddressRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListConfigurationAddressQueryParams;

  @Metadata()
  security: ListConfigurationAddressSecurity;
}


export class ListConfigurationAddressListConfigurationAddressResponseMeta extends SpeakeasyBase {
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


export class ListConfigurationAddressListConfigurationAddressResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=address_configurations", elemType: shared.ConversationsV1ConfigurationAddress })
  addressConfigurations?: shared.ConversationsV1ConfigurationAddress[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListConfigurationAddressListConfigurationAddressResponseMeta;
}


export class ListConfigurationAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConfigurationAddressResponse?: ListConfigurationAddressListConfigurationAddressResponse;

  @Metadata()
  statusCode: number;
}
