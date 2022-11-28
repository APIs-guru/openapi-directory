import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddVideoCreditPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class AddVideoCreditRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: string;

  @SpeakeasyMetadata({ data: "json, name=user_uri" })
  userUri: string;
}


export class AddVideoCreditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddVideoCreditPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.credit+json" })
  request: AddVideoCreditRequestBody;
}


export class AddVideoCreditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  credit?: shared.Credit;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
