import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictTeamsSimplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district_key" })
  districtKey: string;
}


export class GetDistrictTeamsSimpleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictTeamsSimpleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictTeamsSimpleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistrictTeamsSimplePathParams;

  @SpeakeasyMetadata()
  headers: GetDistrictTeamsSimpleHeaders;

  @SpeakeasyMetadata()
  security: GetDistrictTeamsSimpleSecurity;
}


export class GetDistrictTeamsSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamSimple })
  teamSimples?: shared.TeamSimple[];
}
