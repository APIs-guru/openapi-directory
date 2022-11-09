import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlaceGetStreetsByPostCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Postcode" })
  postcode: string;
}


export class PlaceGetStreetsByPostCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=postcode" })
  postcode: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=postcodeInput.postcode" })
  postcodeInputPostcode?: string;
}


export class PlaceGetStreetsByPostCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlaceGetStreetsByPostCodePathParams;

  @Metadata()
  queryParams: PlaceGetStreetsByPostCodeQueryParams;
}


export class PlaceGetStreetsByPostCodeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
