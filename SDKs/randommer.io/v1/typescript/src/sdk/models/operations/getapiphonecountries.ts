import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiPhoneCountriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiPhoneCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApiPhoneCountriesHeaders;
}


export class GetApiPhoneCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
