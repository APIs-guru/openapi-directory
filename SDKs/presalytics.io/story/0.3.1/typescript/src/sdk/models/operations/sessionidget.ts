import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SessionIdGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=session_id" })
  sessionId: string;
}


export class SessionIdGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_relationships" })
  includeRelationships?: boolean;
}


export class SessionIdGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SessionIdGetPathParams;

  @Metadata()
  queryParams: SessionIdGetQueryParams;
}


export class SessionIdGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  session?: shared.Session;
}
