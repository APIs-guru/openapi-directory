import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProvideFeedbackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=document" })
  document?: string;

  @Metadata({ data: "multipart_form, name=expectedLabel" })
  expectedLabel?: string;

  @Metadata({ data: "multipart_form, name=modelId" })
  modelId?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;
}


export class ProvideFeedbackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class ProvideFeedbackRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: ProvideFeedbackRequestBody;

  @Metadata()
  security: ProvideFeedbackSecurity;
}


export class ProvideFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  example?: shared.Example;

  @Metadata()
  statusCode: number;
}
