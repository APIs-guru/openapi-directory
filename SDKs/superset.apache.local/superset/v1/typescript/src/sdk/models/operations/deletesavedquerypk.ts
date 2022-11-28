import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSavedQueryPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteSavedQueryPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteSavedQueryPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQueryPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQueryPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQueryPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQueryPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSavedQueryPkPathParams;

  @SpeakeasyMetadata()
  security: DeleteSavedQueryPkSecurity;
}


export class DeleteSavedQueryPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteSavedQueryPk200ApplicationJsonObject?: DeleteSavedQueryPk200ApplicationJson;

  @SpeakeasyMetadata()
  deleteSavedQueryPk404ApplicationJsonObject?: DeleteSavedQueryPk404ApplicationJson;

  @SpeakeasyMetadata()
  deleteSavedQueryPk422ApplicationJsonObject?: DeleteSavedQueryPk422ApplicationJson;

  @SpeakeasyMetadata()
  deleteSavedQueryPk500ApplicationJsonObject?: DeleteSavedQueryPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
