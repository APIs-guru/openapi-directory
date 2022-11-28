import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSavedQueryPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutSavedQueryPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutSavedQueryPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.SavedQueryRestApiPut;
}


export class PutSavedQueryPk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutSavedQueryPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutSavedQueryPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutSavedQueryPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutSavedQueryPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutSavedQueryPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSavedQueryPkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SavedQueryRestApiPut;

  @SpeakeasyMetadata()
  security: PutSavedQueryPkSecurity;
}


export class PutSavedQueryPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putSavedQueryPk200ApplicationJsonObject?: PutSavedQueryPk200ApplicationJson;

  @SpeakeasyMetadata()
  putSavedQueryPk400ApplicationJsonObject?: PutSavedQueryPk400ApplicationJson;

  @SpeakeasyMetadata()
  putSavedQueryPk401ApplicationJsonObject?: PutSavedQueryPk401ApplicationJson;

  @SpeakeasyMetadata()
  putSavedQueryPk404ApplicationJsonObject?: PutSavedQueryPk404ApplicationJson;

  @SpeakeasyMetadata()
  putSavedQueryPk422ApplicationJsonObject?: PutSavedQueryPk422ApplicationJson;

  @SpeakeasyMetadata()
  putSavedQueryPk500ApplicationJsonObject?: PutSavedQueryPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
