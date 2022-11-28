import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSavedQueryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteSavedQuerySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteSavedQuery200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQuery401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQuery404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQuery422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQuery500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteSavedQueryQueryParams;

  @SpeakeasyMetadata()
  security: DeleteSavedQuerySecurity;
}


export class DeleteSavedQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteSavedQuery200ApplicationJsonObject?: DeleteSavedQuery200ApplicationJson;

  @SpeakeasyMetadata()
  deleteSavedQuery401ApplicationJsonObject?: DeleteSavedQuery401ApplicationJson;

  @SpeakeasyMetadata()
  deleteSavedQuery404ApplicationJsonObject?: DeleteSavedQuery404ApplicationJson;

  @SpeakeasyMetadata()
  deleteSavedQuery422ApplicationJsonObject?: DeleteSavedQuery422ApplicationJson;

  @SpeakeasyMetadata()
  deleteSavedQuery500ApplicationJsonObject?: DeleteSavedQuery500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
