import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiMiscRandomAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=culture" })
  culture?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: number;
}


export class GetApiMiscRandomAddressHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiMiscRandomAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiMiscRandomAddressQueryParams;

  @SpeakeasyMetadata()
  headers: GetApiMiscRandomAddressHeaders;
}


export class GetApiMiscRandomAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
