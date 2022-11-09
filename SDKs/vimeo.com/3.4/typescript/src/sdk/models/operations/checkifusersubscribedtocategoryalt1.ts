import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckIfUserSubscribedToCategoryAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}


export class CheckIfUserSubscribedToCategoryAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CheckIfUserSubscribedToCategoryAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckIfUserSubscribedToCategoryAlt1PathParams;

  @Metadata()
  security: CheckIfUserSubscribedToCategoryAlt1Security;
}


export class CheckIfUserSubscribedToCategoryAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
