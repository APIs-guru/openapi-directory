import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateApiSpecificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateApiSpecificationRequestBodySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=spec" })
  spec: string;
}


export class UpdateApiSpecificationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  spec?: UpdateApiSpecificationRequestBodySpec;
}


export class UpdateApiSpecificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateApiSpecificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApiSpecificationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UpdateApiSpecificationRequestBody;

  @SpeakeasyMetadata()
  security: UpdateApiSpecificationSecurity;
}


export class UpdateApiSpecificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
