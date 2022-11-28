import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxRatesByCountryCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_codes[]" })
  productCodes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=province " })
  province?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class TaxRatesByCountryCode200ApplicationJsonTaxes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=data_name" })
  dataName?: string;

  @SpeakeasyMetadata({ data: "json, name=data_value" })
  dataValue?: string;
}


export class TaxRatesByCountryCode200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName?: string;

  @SpeakeasyMetadata({ data: "json, name=taxes", elemType: TaxRatesByCountryCode200ApplicationJsonTaxes })
  taxes?: TaxRatesByCountryCode200ApplicationJsonTaxes[];
}


export class TaxRatesByCountryCode500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class TaxRatesByCountryCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TaxRatesByCountryCodeQueryParams;
}


export class TaxRatesByCountryCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taxRatesByCountryCode200ApplicationJsonObject?: TaxRatesByCountryCode200ApplicationJson;

  @SpeakeasyMetadata()
  taxRatesByCountryCode500ApplicationJsonObject?: TaxRatesByCountryCode500ApplicationJson;
}
