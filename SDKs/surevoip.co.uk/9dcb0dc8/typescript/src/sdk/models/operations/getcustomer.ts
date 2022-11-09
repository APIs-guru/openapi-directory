import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCustomerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: number;
}


export class GetCustomerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomerPathParams;
}


export class GetCustomer200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=company_name" })
  companyName?: string;

  @Metadata({ data: "json, name=company_website" })
  companyWebsite?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=creditlimit" })
  creditlimit?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=firstname" })
  firstname?: string;

  @Metadata({ data: "json, name=lastname" })
  lastname?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=postcode" })
  postcode?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=username" })
  username?: number;
}


export class GetCustomerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getCustomer200ApplicationJsonObject?: GetCustomer200ApplicationJson;
}
