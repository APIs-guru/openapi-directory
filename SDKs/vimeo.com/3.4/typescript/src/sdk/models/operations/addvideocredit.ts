import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideoCreditPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class AddVideoCreditRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=role" })
  role: string;

  @Metadata({ data: "json, name=user_uri" })
  userUri: string;
}


export class AddVideoCreditRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddVideoCreditPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.credit+json" })
  request: AddVideoCreditRequestBody;
}


export class AddVideoCreditResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  credit?: shared.Credit;

  @Metadata()
  legacyError?: shared.LegacyError;
}
