import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PayeeDetailsUpdateV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class PayeeDetailsUpdateV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: PayeeDetailsUpdateV3PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePayeeDetailsRequest;
}


export class PayeeDetailsUpdateV3Response extends SpeakeasyBase {
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
