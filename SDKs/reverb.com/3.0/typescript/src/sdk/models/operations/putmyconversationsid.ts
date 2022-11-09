import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutMyConversationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutMyConversationsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=read" })
  read?: boolean;
}


export class PutMyConversationsIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutMyConversationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutMyConversationsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutMyConversationsIdRequestBody;

  @Metadata()
  security: PutMyConversationsIdSecurity;
}


export class PutMyConversationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
