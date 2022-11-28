import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiPhoneGenerateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CountryCode" })
  countryCode: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Quantity" })
  quantity: number;
}


export class GetApiPhoneGenerateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiPhoneGenerateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiPhoneGenerateQueryParams;

  @SpeakeasyMetadata()
  headers: GetApiPhoneGenerateHeaders;
}


export class GetApiPhoneGenerateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
