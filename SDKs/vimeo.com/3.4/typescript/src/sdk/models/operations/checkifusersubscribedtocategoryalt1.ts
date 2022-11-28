import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckIfUserSubscribedToCategoryAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}


export class CheckIfUserSubscribedToCategoryAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CheckIfUserSubscribedToCategoryAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CheckIfUserSubscribedToCategoryAlt1PathParams;

  @SpeakeasyMetadata()
  security: CheckIfUserSubscribedToCategoryAlt1Security;
}


export class CheckIfUserSubscribedToCategoryAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
