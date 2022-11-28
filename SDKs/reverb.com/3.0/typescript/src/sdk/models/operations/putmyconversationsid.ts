import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutMyConversationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutMyConversationsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: boolean;
}


export class PutMyConversationsIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutMyConversationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutMyConversationsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutMyConversationsIdRequestBody;

  @SpeakeasyMetadata()
  security: PutMyConversationsIdSecurity;
}


export class PutMyConversationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
