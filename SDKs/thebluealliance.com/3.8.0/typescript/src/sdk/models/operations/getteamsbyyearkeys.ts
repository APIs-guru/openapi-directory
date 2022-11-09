import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsByYearKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=page_num" })
  pageNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamsByYearKeysHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamsByYearKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsByYearKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsByYearKeysPathParams;

  @Metadata()
  headers: GetTeamsByYearKeysHeaders;

  @Metadata()
  security: GetTeamsByYearKeysSecurity;
}


export class GetTeamsByYearKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTeamsByYearKeys200ApplicationJsonStrings?: string[];
}
