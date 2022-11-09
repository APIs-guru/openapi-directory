import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateCardRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCardRequest;

  @Metadata()
  security: CreateCardSecurity;
}


export class CreateCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCardResponse?: shared.CreateCardResponse;

  @Metadata()
  statusCode: number;
}
