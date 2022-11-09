import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddExamplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class AddExampleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=data" })
  data?: string;

  @Metadata({ data: "multipart_form, name=labelId" })
  labelId?: number;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;
}


export class AddExampleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class AddExampleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddExamplePathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: AddExampleRequestBody;

  @Metadata()
  security: AddExampleSecurity;
}


export class AddExampleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  example?: shared.Example;

  @Metadata()
  statusCode: number;
}
