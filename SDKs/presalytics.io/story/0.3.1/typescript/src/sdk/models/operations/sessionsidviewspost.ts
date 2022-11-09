import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SessionsIdViewsPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=session_id" })
  sessionId: string;
}


// SessionsIdViewsPostRequiredParametersToCreateAView
/** 
 * A page view required a page number from the story outline to be created
**/
export class SessionsIdViewsPostRequiredParametersToCreateAView extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeMSecs" })
  activeMSecs?: number;

  @Metadata({ data: "json, name=additional" })
  additional?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;
}


export class SessionsIdViewsPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SessionsIdViewsPostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: SessionsIdViewsPostRequiredParametersToCreateAView;
}


export class SessionsIdViewsPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  view?: shared.View;
}
