import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCustomerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: number;
}


export class GetCustomer200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=company_website" })
  companyWebsite?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=creditlimit" })
  creditlimit?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=postcode" })
  postcode?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: number;
}


export class GetCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomerPathParams;
}


export class GetCustomerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomer200ApplicationJsonObject?: GetCustomer200ApplicationJson;
}
