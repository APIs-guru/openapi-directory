import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=story_id" })
  storyId: string;
}


export class GetStoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;
}


export class GetStorySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class GetStorySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class GetStorySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetStorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetStorySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetStorySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetStorySecurityOption3;
}


export class GetStoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStoryPathParams;

  @Metadata()
  queryParams: GetStoryQueryParams;

  @Metadata()
  security: GetStorySecurity;
}


export class GetStoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  story?: shared.Story;
}
