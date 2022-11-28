import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditPictureAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portraitset_id" })
  portraitsetId: number;
}


export class EditPictureAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;
}


export class EditPictureAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditPictureAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditPictureAlt1PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: EditPictureAlt1RequestBody;

  @SpeakeasyMetadata()
  security: EditPictureAlt1Security;
}


export class EditPictureAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  picture?: shared.Picture;
}
