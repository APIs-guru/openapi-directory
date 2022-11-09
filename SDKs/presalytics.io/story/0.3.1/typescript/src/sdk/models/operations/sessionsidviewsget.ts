import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SessionsIdViewsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=session_id" })
  sessionId: string;
}


export class SessionsIdViewsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SessionsIdViewsGetPathParams;
}


export class SessionsIdViewsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata({ elemType: shared.View })
  views?: shared.View[];
}
