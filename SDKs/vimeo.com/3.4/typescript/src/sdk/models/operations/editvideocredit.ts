import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditVideoCreditPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credit_id" })
  creditId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class EditVideoCreditRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;
}


export class EditVideoCreditSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditVideoCreditRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditVideoCreditPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.credit+json" })
  request?: EditVideoCreditRequestBody;

  @Metadata()
  security: EditVideoCreditSecurity;
}


export class EditVideoCreditResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  credit?: shared.Credit;

  @Metadata()
  legacyError?: shared.LegacyError;
}
