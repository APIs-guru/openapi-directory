import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SessionsIdViewsPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session_id" })
  sessionId: string;
}


// SessionsIdViewsPostRequiredParametersToCreateAView
/** 
 * A page view required a page number from the story outline to be created
**/
export class SessionsIdViewsPostRequiredParametersToCreateAView extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeMSecs" })
  activeMSecs?: number;

  @SpeakeasyMetadata({ data: "json, name=additional" })
  additional?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;
}


export class SessionsIdViewsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionsIdViewsPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SessionsIdViewsPostRequiredParametersToCreateAView;
}


export class SessionsIdViewsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  view?: shared.View;
}
