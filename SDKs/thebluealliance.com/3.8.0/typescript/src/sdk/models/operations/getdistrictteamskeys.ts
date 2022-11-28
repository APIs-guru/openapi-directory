import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictTeamsKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district_key" })
  districtKey: string;
}


export class GetDistrictTeamsKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictTeamsKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictTeamsKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistrictTeamsKeysPathParams;

  @SpeakeasyMetadata()
  headers: GetDistrictTeamsKeysHeaders;

  @SpeakeasyMetadata()
  security: GetDistrictTeamsKeysSecurity;
}


export class GetDistrictTeamsKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDistrictTeamsKeys200ApplicationJsonStrings?: string[];
}
