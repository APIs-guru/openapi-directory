import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditVodPosterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poster_id" })
  posterId: number;
}


export class EditVodPosterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;
}


export class EditVodPosterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditVodPosterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditVodPosterPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: EditVodPosterRequestBody;

  @SpeakeasyMetadata()
  security: EditVodPosterSecurity;
}


export class EditVodPosterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  picture?: shared.Picture;
}
