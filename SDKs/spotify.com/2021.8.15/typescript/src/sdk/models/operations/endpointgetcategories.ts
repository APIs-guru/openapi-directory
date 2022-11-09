import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetCategoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class EndpointGetCategoriesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetCategoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetCategoriesQueryParams;

  @Metadata()
  headers: EndpointGetCategoriesHeaders;

  @Metadata()
  security: EndpointGetCategoriesSecurity;
}


export class EndpointGetCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  categoriesObject?: shared.CategoriesObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  statusCode: number;
}
