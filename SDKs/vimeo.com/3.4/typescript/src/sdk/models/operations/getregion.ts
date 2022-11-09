import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRegionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class GetRegionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRegionPathParams;
}


export class GetRegionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandRegion?: shared.OnDemandRegion;
}
