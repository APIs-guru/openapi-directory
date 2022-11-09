import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateApiSpecificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateApiSpecificationRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=spec" })
  spec: string;
}


export class UpdateApiSpecificationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  spec?: UpdateApiSpecificationRequestBodySpec;
}


export class UpdateApiSpecificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateApiSpecificationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateApiSpecificationPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UpdateApiSpecificationRequestBody;

  @Metadata()
  security: UpdateApiSpecificationSecurity;
}


export class UpdateApiSpecificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
