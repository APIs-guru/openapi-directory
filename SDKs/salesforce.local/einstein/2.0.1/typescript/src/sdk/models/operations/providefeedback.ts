import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProvideFeedbackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=document" })
  document?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=expectedLabel" })
  expectedLabel?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;
}


export class ProvideFeedbackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class ProvideFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: ProvideFeedbackRequestBody;

  @SpeakeasyMetadata()
  security: ProvideFeedbackSecurity;
}


export class ProvideFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  example?: shared.Example;

  @SpeakeasyMetadata()
  statusCode: number;
}
