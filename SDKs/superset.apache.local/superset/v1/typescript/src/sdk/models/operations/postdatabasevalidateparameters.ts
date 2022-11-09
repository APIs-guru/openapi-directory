import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDatabaseValidateParametersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDatabaseValidateParametersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DatabaseValidateParametersSchema;

  @Metadata()
  security: PostDatabaseValidateParametersSecurity;
}


export class PostDatabaseValidateParameters200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseValidateParameters400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseValidateParameters422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseValidateParameters500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseValidateParametersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postDatabaseValidateParameters200ApplicationJsonObject?: PostDatabaseValidateParameters200ApplicationJson;

  @Metadata()
  postDatabaseValidateParameters400ApplicationJsonObject?: PostDatabaseValidateParameters400ApplicationJson;

  @Metadata()
  postDatabaseValidateParameters422ApplicationJsonObject?: PostDatabaseValidateParameters422ApplicationJson;

  @Metadata()
  postDatabaseValidateParameters500ApplicationJsonObject?: PostDatabaseValidateParameters500ApplicationJson;

  @Metadata()
  statusCode: number;
}
