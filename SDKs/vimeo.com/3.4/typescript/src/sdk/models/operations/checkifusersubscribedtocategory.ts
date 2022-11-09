import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckIfUserSubscribedToCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class CheckIfUserSubscribedToCategorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CheckIfUserSubscribedToCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckIfUserSubscribedToCategoryPathParams;

  @Metadata()
  security: CheckIfUserSubscribedToCategorySecurity;
}


export class CheckIfUserSubscribedToCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
