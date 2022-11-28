import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUsersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutUsersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUsersIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.User;
}


export class PutUsersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;
}
