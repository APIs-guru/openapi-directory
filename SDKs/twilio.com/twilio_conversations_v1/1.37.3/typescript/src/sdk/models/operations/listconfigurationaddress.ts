import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListConfigurationAddressServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListConfigurationAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Type" })
  type?: string;
}


export class ListConfigurationAddressSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConfigurationAddressListConfigurationAddressResponseMeta extends SpeakeasyBase {
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


export class ListConfigurationAddressListConfigurationAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_configurations", elemType: shared.ConversationsV1ConfigurationAddress })
  addressConfigurations?: shared.ConversationsV1ConfigurationAddress[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListConfigurationAddressListConfigurationAddressResponseMeta;
}


export class ListConfigurationAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListConfigurationAddressQueryParams;

  @SpeakeasyMetadata()
  security: ListConfigurationAddressSecurity;
}


export class ListConfigurationAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listConfigurationAddressResponse?: ListConfigurationAddressListConfigurationAddressResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
