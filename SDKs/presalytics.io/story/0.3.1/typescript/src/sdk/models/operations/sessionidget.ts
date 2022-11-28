import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SessionIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session_id" })
  sessionId: string;
}


export class SessionIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_relationships" })
  includeRelationships?: boolean;
}


export class SessionIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: SessionIdGetQueryParams;
}


export class SessionIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  session?: shared.Session;
}
