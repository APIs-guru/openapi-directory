import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProvideFeedback1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=data" })
  data?: string;

  @Metadata({ data: "multipart_form, name=expectedLabel" })
  expectedLabel?: string;

  @Metadata({ data: "multipart_form, name=modelId" })
  modelId?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;
}


export class ProvideFeedback1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class ProvideFeedback1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: ProvideFeedback1RequestBody;

  @Metadata()
  security: ProvideFeedback1Security;
}


export class ProvideFeedback1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  example?: shared.Example;

  @Metadata()
  statusCode: number;
}
