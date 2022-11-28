import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetVodRegionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class SetVodRegionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries" })
  countries: string[];
}


export class SetVodRegionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SetVodRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetVodRegionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.ondemand.region+json" })
  request: SetVodRegionsRequestBody;

  @SpeakeasyMetadata()
  security: SetVodRegionsSecurity;
}


export class SetVodRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  onDemandRegion?: shared.OnDemandRegion;
}
