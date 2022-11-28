import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamsByYearKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamsByYearKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamsByYearKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsByYearKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamsByYearKeysPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamsByYearKeysHeaders;

  @SpeakeasyMetadata()
  security: GetTeamsByYearKeysSecurity;
}


export class GetTeamsByYearKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTeamsByYearKeys200ApplicationJsonStrings?: string[];
}
