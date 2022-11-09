import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: string;
}


export class GetStoriesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class GetStoriesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class GetStoriesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetStoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetStoriesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetStoriesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetStoriesSecurityOption3;
}


export class GetStoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStoriesQueryParams;

  @Metadata()
  security: GetStoriesSecurity;
}


export class GetStories200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=stories", elemType: shared.Story })
  stories?: shared.Story[];
}


export class GetStoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStories200ApplicationJsonObject?: GetStories200ApplicationJson;
}
