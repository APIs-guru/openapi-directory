import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsSimplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=page_num" })
  pageNum: number;
}


export class GetTeamsSimpleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamsSimpleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsSimpleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsSimplePathParams;

  @Metadata()
  headers: GetTeamsSimpleHeaders;

  @Metadata()
  security: GetTeamsSimpleSecurity;
}


export class GetTeamsSimpleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TeamSimple })
  teamSimples?: shared.TeamSimple[];
}
