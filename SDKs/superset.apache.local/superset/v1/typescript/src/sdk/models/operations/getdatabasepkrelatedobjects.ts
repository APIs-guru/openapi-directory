import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabasePkRelatedObjectsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDatabasePkRelatedObjectsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkRelatedObjectsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatabasePkRelatedObjectsPathParams;

  @Metadata()
  security: GetDatabasePkRelatedObjectsSecurity;
}


export class GetDatabasePkRelatedObjects401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkRelatedObjects404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkRelatedObjects500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkRelatedObjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  databaseRelatedObjectsResponse?: shared.DatabaseRelatedObjectsResponse;

  @Metadata()
  getDatabasePkRelatedObjects401ApplicationJsonObject?: GetDatabasePkRelatedObjects401ApplicationJson;

  @Metadata()
  getDatabasePkRelatedObjects404ApplicationJsonObject?: GetDatabasePkRelatedObjects404ApplicationJson;

  @Metadata()
  getDatabasePkRelatedObjects500ApplicationJsonObject?: GetDatabasePkRelatedObjects500ApplicationJson;

  @Metadata()
  statusCode: number;
}
