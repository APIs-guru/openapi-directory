import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSavedQueryPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteSavedQueryPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteSavedQueryPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSavedQueryPkPathParams;

  @Metadata()
  security: DeleteSavedQueryPkSecurity;
}


export class DeleteSavedQueryPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQueryPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQueryPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQueryPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSavedQueryPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteSavedQueryPk200ApplicationJsonObject?: DeleteSavedQueryPk200ApplicationJson;

  @Metadata()
  deleteSavedQueryPk404ApplicationJsonObject?: DeleteSavedQueryPk404ApplicationJson;

  @Metadata()
  deleteSavedQueryPk422ApplicationJsonObject?: DeleteSavedQueryPk422ApplicationJson;

  @Metadata()
  deleteSavedQueryPk500ApplicationJsonObject?: DeleteSavedQueryPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
