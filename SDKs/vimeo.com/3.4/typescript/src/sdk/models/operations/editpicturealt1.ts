import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditPictureAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portraitset_id" })
  portraitsetId: number;
}


export class EditPictureAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;
}


export class EditPictureAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditPictureAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: EditPictureAlt1PathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: EditPictureAlt1RequestBody;

  @Metadata()
  security: EditPictureAlt1Security;
}


export class EditPictureAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  picture?: shared.Picture;
}
