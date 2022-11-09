import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PayorCreateApplicationRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class PayorCreateApplicationRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PayorCreateApplicationRequestPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PayorCreateApplicationRequest;
}


export class PayorCreateApplicationRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;

  @Metadata()
  inlineResponse409?: any;
}
