import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubscribeToCategoryAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: number;
}


export class SubscribeToCategoryAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SubscribeToCategoryAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: SubscribeToCategoryAlt1PathParams;

  @Metadata()
  security: SubscribeToCategoryAlt1Security;
}


export class SubscribeToCategoryAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
