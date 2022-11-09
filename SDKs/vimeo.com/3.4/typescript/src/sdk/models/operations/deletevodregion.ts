import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVodRegionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class DeleteVodRegionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteVodRegionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVodRegionPathParams;

  @Metadata()
  security: DeleteVodRegionSecurity;
}


export class DeleteVodRegionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
