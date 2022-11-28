import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckIfUserSubscribedToCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class CheckIfUserSubscribedToCategorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CheckIfUserSubscribedToCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckIfUserSubscribedToCategoryPathParams;

  @SpeakeasyMetadata()
  security: CheckIfUserSubscribedToCategorySecurity;
}


export class CheckIfUserSubscribedToCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
