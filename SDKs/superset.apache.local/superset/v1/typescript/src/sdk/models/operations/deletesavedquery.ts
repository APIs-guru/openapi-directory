import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSavedQueryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteSavedQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteSavedQueryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteSavedQueryQueryParams;

  @Metadata()
  security: DeleteSavedQuerySecurity;
}


export class DeleteSavedQuery200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQuery401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQuery404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQuery422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQuery500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteSavedQuery200ApplicationJsonObject?: DeleteSavedQuery200ApplicationJson;

  @Metadata()
  deleteSavedQuery401ApplicationJsonObject?: DeleteSavedQuery401ApplicationJson;

  @Metadata()
  deleteSavedQuery404ApplicationJsonObject?: DeleteSavedQuery404ApplicationJson;

  @Metadata()
  deleteSavedQuery422ApplicationJsonObject?: DeleteSavedQuery422ApplicationJson;

  @Metadata()
  deleteSavedQuery500ApplicationJsonObject?: DeleteSavedQuery500ApplicationJson;

  @Metadata()
  statusCode: number;
}
