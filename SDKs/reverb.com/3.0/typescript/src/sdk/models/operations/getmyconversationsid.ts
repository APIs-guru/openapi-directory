import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyConversationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMyConversationsIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyConversationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyConversationsIdPathParams;

  @Metadata()
  security: GetMyConversationsIdSecurity;
}


export class GetMyConversationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
