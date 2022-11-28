import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlaceGetStreetsByPostCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Postcode" })
  postcode: string;
}


export class PlaceGetStreetsByPostCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=postcode" })
  postcode: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=postcodeInput.postcode" })
  postcodeInputPostcode?: string;
}


export class PlaceGetStreetsByPostCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlaceGetStreetsByPostCodePathParams;

  @SpeakeasyMetadata()
  queryParams: PlaceGetStreetsByPostCodeQueryParams;
}


export class PlaceGetStreetsByPostCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
