import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PayorCreateApiKeyRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payorId" })
  payorId: string;
}


export class PayorCreateApiKeyRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PayorCreateApiKeyRequestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PayorCreateApiKeyRequest;
}


export class PayorCreateApiKeyRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payorCreateApiKeyResponse?: shared.PayorCreateApiKeyResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
