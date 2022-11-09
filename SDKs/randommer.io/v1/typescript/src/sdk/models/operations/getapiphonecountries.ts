import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiPhoneCountriesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiPhoneCountriesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetApiPhoneCountriesHeaders;
}


export class GetApiPhoneCountriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
