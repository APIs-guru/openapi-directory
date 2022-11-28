import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxRatesByIpAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_code" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class TaxRatesByIpAddress200ApplicationJsonTaxes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=data_name" })
  dataName?: string;

  @SpeakeasyMetadata({ data: "json, name=data_value" })
  dataValue?: string;
}


export class TaxRatesByIpAddress200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName?: string;

  @SpeakeasyMetadata({ data: "json, name=taxes", elemType: TaxRatesByIpAddress200ApplicationJsonTaxes })
  taxes?: TaxRatesByIpAddress200ApplicationJsonTaxes[];
}


export class TaxRatesByIpAddress500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class TaxRatesByIpAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TaxRatesByIpAddressQueryParams;
}


export class TaxRatesByIpAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: TaxRatesByIpAddress200ApplicationJson })
  taxRatesByIpAddress200ApplicationJsonObjects?: TaxRatesByIpAddress200ApplicationJson[];

  @SpeakeasyMetadata()
  taxRatesByIpAddress500ApplicationJsonObject?: TaxRatesByIpAddress500ApplicationJson;
}
