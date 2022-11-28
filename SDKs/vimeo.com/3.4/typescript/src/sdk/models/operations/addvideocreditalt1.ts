import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddVideoCreditAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class AddVideoCreditAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: string;

  @SpeakeasyMetadata({ data: "json, name=user_uri" })
  userUri: string;
}


export class AddVideoCreditAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddVideoCreditAlt1PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.credit+json" })
  request: AddVideoCreditAlt1RequestBody;
}


export class AddVideoCreditAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  credit?: shared.Credit;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
