import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetACategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;
}


export class EndpointGetACategoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;
}


export class EndpointGetACategoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetACategorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetACategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndpointGetACategoryPathParams;

  @SpeakeasyMetadata()
  queryParams: EndpointGetACategoryQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetACategoryHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetACategorySecurity;
}


export class EndpointGetACategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryObject?: shared.CategoryObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
