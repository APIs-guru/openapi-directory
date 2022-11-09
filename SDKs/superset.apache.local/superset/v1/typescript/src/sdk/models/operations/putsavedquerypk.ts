import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSavedQueryPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutSavedQueryPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutSavedQueryPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSavedQueryPkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SavedQueryRestApiPut;

  @Metadata()
  security: PutSavedQueryPkSecurity;
}


export class PutSavedQueryPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: shared.SavedQueryRestApiPut;
}


export class PutSavedQueryPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutSavedQueryPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutSavedQueryPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutSavedQueryPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutSavedQueryPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutSavedQueryPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putSavedQueryPk200ApplicationJsonObject?: PutSavedQueryPk200ApplicationJson;

  @Metadata()
  putSavedQueryPk400ApplicationJsonObject?: PutSavedQueryPk400ApplicationJson;

  @Metadata()
  putSavedQueryPk401ApplicationJsonObject?: PutSavedQueryPk401ApplicationJson;

  @Metadata()
  putSavedQueryPk404ApplicationJsonObject?: PutSavedQueryPk404ApplicationJson;

  @Metadata()
  putSavedQueryPk422ApplicationJsonObject?: PutSavedQueryPk422ApplicationJson;

  @Metadata()
  putSavedQueryPk500ApplicationJsonObject?: PutSavedQueryPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
