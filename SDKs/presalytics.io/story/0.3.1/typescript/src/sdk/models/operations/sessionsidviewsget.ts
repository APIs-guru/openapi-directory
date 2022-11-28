import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SessionsIdViewsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session_id" })
  sessionId: string;
}


export class SessionsIdViewsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionsIdViewsGetPathParams;
}


export class SessionsIdViewsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata({ elemType: shared.View })
  views?: shared.View[];
}
