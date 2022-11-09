import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PayorCreateApiKeyRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
  applicationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class PayorCreateApiKeyRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PayorCreateApiKeyRequestPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PayorCreateApiKeyRequest;
}


export class PayorCreateApiKeyRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payorCreateApiKeyResponse?: shared.PayorCreateApiKeyResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
