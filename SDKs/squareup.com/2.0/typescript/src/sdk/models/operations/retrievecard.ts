import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=card_id" })
  cardId: string;
}


export class RetrieveCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveCardPathParams;

  @Metadata()
  security: RetrieveCardSecurity;
}


export class RetrieveCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveCardResponse?: shared.RetrieveCardResponse;

  @Metadata()
  statusCode: number;
}
