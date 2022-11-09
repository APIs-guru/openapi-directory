import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ViewedStoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=story_id" })
  storyId: string;
}


export class ViewedStorySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class ViewedStorySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class ViewedStorySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class ViewedStorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ViewedStorySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ViewedStorySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: ViewedStorySecurityOption3;
}


export class ViewedStoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ViewedStoryPathParams;

  @Metadata()
  security: ViewedStorySecurity;
}


export class ViewedStoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
