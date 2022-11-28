import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamsSimplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page_num" })
  pageNum: number;
}


export class GetTeamsSimpleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamsSimpleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsSimpleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamsSimplePathParams;

  @SpeakeasyMetadata()
  headers: GetTeamsSimpleHeaders;

  @SpeakeasyMetadata()
  security: GetTeamsSimpleSecurity;
}


export class GetTeamsSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamSimple })
  teamSimples?: shared.TeamSimple[];
}
