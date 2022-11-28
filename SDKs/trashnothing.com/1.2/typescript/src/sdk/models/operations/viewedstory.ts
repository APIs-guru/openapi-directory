import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ViewedStoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_id" })
  storyId: string;
}


export class ViewedStorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit?: shared.SchemeOauth2Implicit;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code?: shared.SchemeOauth2Code;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey?: shared.SchemeApiKey;
}


export class ViewedStoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ViewedStoryPathParams;

  @SpeakeasyMetadata()
  security: ViewedStorySecurity;
}


export class ViewedStoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
