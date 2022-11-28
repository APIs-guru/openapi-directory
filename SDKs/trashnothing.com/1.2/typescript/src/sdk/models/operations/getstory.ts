import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_id" })
  storyId: string;
}


export class GetStoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;
}


export class GetStorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit?: shared.SchemeOauth2Implicit;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code?: shared.SchemeOauth2Code;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey?: shared.SchemeApiKey;
}


export class GetStoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStoryQueryParams;

  @SpeakeasyMetadata()
  security: GetStorySecurity;
}


export class GetStoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  story?: shared.Story;
}
