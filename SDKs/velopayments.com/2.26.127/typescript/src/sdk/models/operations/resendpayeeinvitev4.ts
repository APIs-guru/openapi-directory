import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResendPayeeInviteV4PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class ResendPayeeInviteV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResendPayeeInviteV4PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.InvitePayeeRequest2;
}


export class ResendPayeeInviteV4Response extends SpeakeasyBase {
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

  @SpeakeasyMetadata()
  inlineResponse409?: any;
}
