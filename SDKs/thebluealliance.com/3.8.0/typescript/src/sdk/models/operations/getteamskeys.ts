import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamsKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page_num" })
  pageNum: number;
}


export class GetTeamsKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamsKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamsKeysPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamsKeysHeaders;

  @SpeakeasyMetadata()
  security: GetTeamsKeysSecurity;
}


export class GetTeamsKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTeamsKeys200ApplicationJsonStrings?: string[];
}
