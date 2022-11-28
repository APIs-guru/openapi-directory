import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabasePkRelatedObjectsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDatabasePkRelatedObjectsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkRelatedObjects401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkRelatedObjects404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkRelatedObjects500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkRelatedObjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatabasePkRelatedObjectsPathParams;

  @SpeakeasyMetadata()
  security: GetDatabasePkRelatedObjectsSecurity;
}


export class GetDatabasePkRelatedObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  databaseRelatedObjectsResponse?: shared.DatabaseRelatedObjectsResponse;

  @SpeakeasyMetadata()
  getDatabasePkRelatedObjects401ApplicationJsonObject?: GetDatabasePkRelatedObjects401ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkRelatedObjects404ApplicationJsonObject?: GetDatabasePkRelatedObjects404ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkRelatedObjects500ApplicationJsonObject?: GetDatabasePkRelatedObjects500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
