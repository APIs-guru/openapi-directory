import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditPicturePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portraitset_id" })
  portraitsetId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class EditPictureRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;
}


export class EditPictureSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditPictureRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditPicturePathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: EditPictureRequestBody;

  @Metadata()
  security: EditPictureSecurity;
}


export class EditPictureResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  picture?: shared.Picture;
}
