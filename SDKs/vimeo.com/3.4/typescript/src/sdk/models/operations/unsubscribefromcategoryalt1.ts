import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnsubscribeFromCategoryAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}


export class UnsubscribeFromCategoryAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UnsubscribeFromCategoryAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnsubscribeFromCategoryAlt1PathParams;

  @SpeakeasyMetadata()
  security: UnsubscribeFromCategoryAlt1Security;
}


export class UnsubscribeFromCategoryAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
