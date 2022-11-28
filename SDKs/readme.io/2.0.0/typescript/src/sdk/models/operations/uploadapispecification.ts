import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadApiSpecificationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class UploadApiSpecificationRequestBodySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=spec" })
  spec: string;
}


export class UploadApiSpecificationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  spec?: UploadApiSpecificationRequestBodySpec;
}


export class UploadApiSpecificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UploadApiSpecificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UploadApiSpecificationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UploadApiSpecificationRequestBody;

  @SpeakeasyMetadata()
  security: UploadApiSpecificationSecurity;
}


export class UploadApiSpecificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
