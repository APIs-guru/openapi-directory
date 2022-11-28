import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddExamplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class AddExampleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=labelId" })
  labelId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;
}


export class AddExampleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class AddExampleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddExamplePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: AddExampleRequestBody;

  @SpeakeasyMetadata()
  security: AddExampleSecurity;
}


export class AddExampleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  example?: shared.Example;

  @SpeakeasyMetadata()
  statusCode: number;
}
