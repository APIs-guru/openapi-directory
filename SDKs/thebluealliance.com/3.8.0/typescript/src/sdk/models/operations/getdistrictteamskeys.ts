import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictTeamsKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=district_key" })
  districtKey: string;
}


export class GetDistrictTeamsKeysHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictTeamsKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictTeamsKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistrictTeamsKeysPathParams;

  @Metadata()
  headers: GetDistrictTeamsKeysHeaders;

  @Metadata()
  security: GetDistrictTeamsKeysSecurity;
}


export class GetDistrictTeamsKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDistrictTeamsKeys200ApplicationJsonStrings?: string[];
}
