import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AllTaxRatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Product_code" })
  productCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class AllTaxRatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AllTaxRatesQueryParams;
}


export class AllTaxRates200ApplicationJsonRates extends SpeakeasyBase {
  @Metadata({ data: "json, name=data_name" })
  dataName?: string;

  @Metadata({ data: "json, name=data_value" })
  dataValue?: string;

  @Metadata({ data: "json, name=product_code" })
  productCode?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AllTaxRates200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rates", elemType: operations.AllTaxRates200ApplicationJsonRates })
  rates?: AllTaxRates200ApplicationJsonRates[];

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}


export class AllTaxRates500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AllTaxRatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.AllTaxRates200ApplicationJson })
  allTaxRates200ApplicationJsonObjects?: AllTaxRates200ApplicationJson[];

  @Metadata()
  allTaxRates500ApplicationJsonObject?: AllTaxRates500ApplicationJson;
}
