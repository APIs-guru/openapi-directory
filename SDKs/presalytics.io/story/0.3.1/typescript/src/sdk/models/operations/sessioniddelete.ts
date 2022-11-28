import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionIdDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session_id" })
  sessionId: string;
}


export class SessionIdDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionIdDeletePathParams;
}


export class SessionIdDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
