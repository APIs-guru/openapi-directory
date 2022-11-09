import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SessionIdDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=session_id" })
  sessionId: string;
}


export class SessionIdDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SessionIdDeletePathParams;
}


export class SessionIdDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;
}
