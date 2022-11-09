import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiPhoneValidateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=CountryCode" })
  countryCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=telephone" })
  telephone: string;
}


export class GetApiPhoneValidateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiPhoneValidateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiPhoneValidateQueryParams;

  @Metadata()
  headers: GetApiPhoneValidateHeaders;
}


export class GetApiPhoneValidateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
