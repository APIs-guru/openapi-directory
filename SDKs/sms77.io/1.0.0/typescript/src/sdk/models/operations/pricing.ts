import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PricingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;
}


export class PricingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PricingQueryParams;
}


export class PricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
