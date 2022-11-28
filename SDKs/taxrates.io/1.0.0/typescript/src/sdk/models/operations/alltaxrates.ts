import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllTaxRatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Product_code" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class AllTaxRates200ApplicationJsonRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_name" })
  dataName?: string;

  @SpeakeasyMetadata({ data: "json, name=data_value" })
  dataValue?: string;

  @SpeakeasyMetadata({ data: "json, name=product_code" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AllTaxRates200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rates", elemType: AllTaxRates200ApplicationJsonRates })
  rates?: AllTaxRates200ApplicationJsonRates[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}


export class AllTaxRates500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class AllTaxRatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AllTaxRatesQueryParams;
}


export class AllTaxRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: AllTaxRates200ApplicationJson })
  allTaxRates200ApplicationJsonObjects?: AllTaxRates200ApplicationJson[];

  @SpeakeasyMetadata()
  allTaxRates500ApplicationJsonObject?: AllTaxRates500ApplicationJson;
}
