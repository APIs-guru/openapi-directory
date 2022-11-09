import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetACategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: string;
}


export class EndpointGetACategoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;
}


export class EndpointGetACategoryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetACategorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetACategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EndpointGetACategoryPathParams;

  @Metadata()
  queryParams: EndpointGetACategoryQueryParams;

  @Metadata()
  headers: EndpointGetACategoryHeaders;

  @Metadata()
  security: EndpointGetACategorySecurity;
}


export class EndpointGetACategoryResponse extends SpeakeasyBase {
  @Metadata()
  categoryObject?: shared.CategoryObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
