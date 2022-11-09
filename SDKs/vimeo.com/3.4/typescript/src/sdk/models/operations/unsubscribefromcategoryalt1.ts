import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnsubscribeFromCategoryAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}


export class UnsubscribeFromCategoryAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UnsubscribeFromCategoryAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: UnsubscribeFromCategoryAlt1PathParams;

  @Metadata()
  security: UnsubscribeFromCategoryAlt1Security;
}


export class UnsubscribeFromCategoryAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
