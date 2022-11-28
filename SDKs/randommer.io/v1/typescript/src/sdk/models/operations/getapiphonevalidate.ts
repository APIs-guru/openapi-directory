import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiPhoneValidateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CountryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=telephone" })
  telephone: string;
}


export class GetApiPhoneValidateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiPhoneValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiPhoneValidateQueryParams;

  @SpeakeasyMetadata()
  headers: GetApiPhoneValidateHeaders;
}


export class GetApiPhoneValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
