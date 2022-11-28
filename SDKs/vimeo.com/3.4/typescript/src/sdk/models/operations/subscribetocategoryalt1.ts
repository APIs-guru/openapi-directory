import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubscribeToCategoryAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: number;
}


export class SubscribeToCategoryAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SubscribeToCategoryAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubscribeToCategoryAlt1PathParams;

  @SpeakeasyMetadata()
  security: SubscribeToCategoryAlt1Security;
}


export class SubscribeToCategoryAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
