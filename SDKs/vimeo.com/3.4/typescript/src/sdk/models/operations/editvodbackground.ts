import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditVodBackgroundPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=background_id" })
  backgroundId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class EditVodBackgroundRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;
}


export class EditVodBackgroundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditVodBackgroundRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditVodBackgroundPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: EditVodBackgroundRequestBody;

  @Metadata()
  security: EditVodBackgroundSecurity;
}


export class EditVodBackgroundResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  picture?: shared.Picture;
}
