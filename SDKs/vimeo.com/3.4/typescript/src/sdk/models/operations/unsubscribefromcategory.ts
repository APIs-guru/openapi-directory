import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnsubscribeFromCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class UnsubscribeFromCategorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UnsubscribeFromCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnsubscribeFromCategoryPathParams;

  @Metadata()
  security: UnsubscribeFromCategorySecurity;
}


export class UnsubscribeFromCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
