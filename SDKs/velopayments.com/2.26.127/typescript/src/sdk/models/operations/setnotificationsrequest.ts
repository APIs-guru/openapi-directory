import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetNotificationsRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class SetNotificationsRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetNotificationsRequestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SetNotificationsRequest;
}


export class SetNotificationsRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
