import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResendPayeeInviteV4PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class ResendPayeeInviteV4Request extends SpeakeasyBase {
  @Metadata()
  pathParams: ResendPayeeInviteV4PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InvitePayeeRequest2;
}


export class ResendPayeeInviteV4Response extends SpeakeasyBase {
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

  @Metadata()
  inlineResponse409?: any;
}
