import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVodRegionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class DeleteVodRegionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries" })
  countries?: string[];
}


export class DeleteVodRegionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteVodRegionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVodRegionsPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.ondemand.region+json" })
  request?: DeleteVodRegionsRequestBody;

  @Metadata()
  security: DeleteVodRegionsSecurity;
}


export class DeleteVodRegionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.OnDemandRegion })
  onDemandRegions?: shared.OnDemandRegion[];
}
