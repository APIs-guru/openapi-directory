import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetVodRegionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class SetVodRegionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries" })
  countries: string[];
}


export class SetVodRegionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SetVodRegionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetVodRegionsPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.ondemand.region+json" })
  request: SetVodRegionsRequestBody;

  @Metadata()
  security: SetVodRegionsSecurity;
}


export class SetVodRegionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandRegion?: shared.OnDemandRegion;
}
