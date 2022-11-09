import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiPhoneGenerateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=CountryCode" })
  countryCode: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Quantity" })
  quantity: number;
}


export class GetApiPhoneGenerateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiPhoneGenerateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiPhoneGenerateQueryParams;

  @Metadata()
  headers: GetApiPhoneGenerateHeaders;
}


export class GetApiPhoneGenerateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
