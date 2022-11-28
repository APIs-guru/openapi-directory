import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictTeamsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district_key" })
  districtKey: string;
}


export class GetDistrictTeamsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictTeamsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictTeamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistrictTeamsPathParams;

  @SpeakeasyMetadata()
  headers: GetDistrictTeamsHeaders;

  @SpeakeasyMetadata()
  security: GetDistrictTeamsSecurity;
}


export class GetDistrictTeamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Team })
  teams?: shared.Team[];
}
