import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResendPayeeInviteV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class ResendPayeeInviteV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: ResendPayeeInviteV3PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InvitePayeeRequest;
}


export class ResendPayeeInviteV3Response extends SpeakeasyBase {
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
