import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaxRatesByIpAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=product_code" })
  productCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class TaxRatesByIpAddressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TaxRatesByIpAddressQueryParams;
}


export class TaxRatesByIpAddress200ApplicationJsonTaxes extends SpeakeasyBase {
  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=data_name" })
  dataName?: string;

  @Metadata({ data: "json, name=data_value" })
  dataValue?: string;
}


export class TaxRatesByIpAddress200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=country_name" })
  countryName?: string;

  @Metadata({ data: "json, name=taxes", elemType: operations.TaxRatesByIpAddress200ApplicationJsonTaxes })
  taxes?: TaxRatesByIpAddress200ApplicationJsonTaxes[];
}


export class TaxRatesByIpAddress500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class TaxRatesByIpAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.TaxRatesByIpAddress200ApplicationJson })
  taxRatesByIpAddress200ApplicationJsonObjects?: TaxRatesByIpAddress200ApplicationJson[];

  @Metadata()
  taxRatesByIpAddress500ApplicationJsonObject?: TaxRatesByIpAddress500ApplicationJson;
}
