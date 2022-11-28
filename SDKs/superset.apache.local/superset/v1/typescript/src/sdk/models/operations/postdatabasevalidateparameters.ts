import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDatabaseValidateParametersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDatabaseValidateParameters200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseValidateParameters400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseValidateParameters422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseValidateParameters500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseValidateParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DatabaseValidateParametersSchema;

  @SpeakeasyMetadata()
  security: PostDatabaseValidateParametersSecurity;
}


export class PostDatabaseValidateParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postDatabaseValidateParameters200ApplicationJsonObject?: PostDatabaseValidateParameters200ApplicationJson;

  @SpeakeasyMetadata()
  postDatabaseValidateParameters400ApplicationJsonObject?: PostDatabaseValidateParameters400ApplicationJson;

  @SpeakeasyMetadata()
  postDatabaseValidateParameters422ApplicationJsonObject?: PostDatabaseValidateParameters422ApplicationJson;

  @SpeakeasyMetadata()
  postDatabaseValidateParameters500ApplicationJsonObject?: PostDatabaseValidateParameters500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
