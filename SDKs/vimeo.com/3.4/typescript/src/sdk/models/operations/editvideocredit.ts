import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditVideoCreditPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credit_id" })
  creditId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class EditVideoCreditRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}


export class EditVideoCreditSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditVideoCreditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditVideoCreditPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.credit+json" })
  request?: EditVideoCreditRequestBody;

  @SpeakeasyMetadata()
  security: EditVideoCreditSecurity;
}


export class EditVideoCreditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  credit?: shared.Credit;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
