import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVodRegionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class DeleteVodRegionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries" })
  countries?: string[];
}


export class DeleteVodRegionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteVodRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVodRegionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.ondemand.region+json" })
  request?: DeleteVodRegionsRequestBody;

  @SpeakeasyMetadata()
  security: DeleteVodRegionsSecurity;
}


export class DeleteVodRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.OnDemandRegion })
  onDemandRegions?: shared.OnDemandRegion[];
}
