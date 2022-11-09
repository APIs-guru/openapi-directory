import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisableCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=card_id" })
  cardId: string;
}


export class DisableCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DisableCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisableCardPathParams;

  @Metadata()
  security: DisableCardSecurity;
}


export class DisableCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disableCardResponse?: shared.DisableCardResponse;

  @Metadata()
  statusCode: number;
}
