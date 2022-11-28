import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProvideFeedback1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=expectedLabel" })
  expectedLabel?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;
}


export class ProvideFeedback1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class ProvideFeedback1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: ProvideFeedback1RequestBody;

  @SpeakeasyMetadata()
  security: ProvideFeedback1Security;
}


export class ProvideFeedback1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  example?: shared.Example;

  @SpeakeasyMetadata()
  statusCode: number;
}
