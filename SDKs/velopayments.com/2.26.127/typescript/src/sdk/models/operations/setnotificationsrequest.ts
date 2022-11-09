import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetNotificationsRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class SetNotificationsRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetNotificationsRequestPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SetNotificationsRequest;
}


export class SetNotificationsRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
