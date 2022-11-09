import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaxRatesByCountryCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country_code" })
  countryCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=product_codes[]" })
  productCodes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=province " })
  province?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class TaxRatesByCountryCodeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TaxRatesByCountryCodeQueryParams;
}


export class TaxRatesByCountryCode200ApplicationJsonTaxes extends SpeakeasyBase {
  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=data_name" })
  dataName?: string;

  @Metadata({ data: "json, name=data_value" })
  dataValue?: string;
}


export class TaxRatesByCountryCode200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=country_name" })
  countryName?: string;

  @Metadata({ data: "json, name=taxes", elemType: operations.TaxRatesByCountryCode200ApplicationJsonTaxes })
  taxes?: TaxRatesByCountryCode200ApplicationJsonTaxes[];
}


export class TaxRatesByCountryCode500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class TaxRatesByCountryCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxRatesByCountryCode200ApplicationJsonObject?: TaxRatesByCountryCode200ApplicationJson;

  @Metadata()
  taxRatesByCountryCode500ApplicationJsonObject?: TaxRatesByCountryCode500ApplicationJson;
}
