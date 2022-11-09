import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVodBackgroundPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class CreateVodBackgroundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateVodBackgroundRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVodBackgroundPathParams;

  @Metadata()
  security: CreateVodBackgroundSecurity;
}


export class CreateVodBackgroundResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  picture?: shared.Picture;
}
