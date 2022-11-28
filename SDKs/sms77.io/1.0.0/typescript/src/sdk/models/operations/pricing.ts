import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PricingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;
}


export class PricingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PricingQueryParams;
}


export class PricingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
