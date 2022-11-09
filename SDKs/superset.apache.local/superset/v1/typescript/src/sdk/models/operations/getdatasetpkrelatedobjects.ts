import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatasetPkRelatedObjectsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDatasetPkRelatedObjectsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetPkRelatedObjectsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatasetPkRelatedObjectsPathParams;

  @Metadata()
  security: GetDatasetPkRelatedObjectsSecurity;
}


export class GetDatasetPkRelatedObjects401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPkRelatedObjects404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPkRelatedObjects500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPkRelatedObjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  datasetRelatedObjectsResponse?: shared.DatasetRelatedObjectsResponse;

  @Metadata()
  getDatasetPkRelatedObjects401ApplicationJsonObject?: GetDatasetPkRelatedObjects401ApplicationJson;

  @Metadata()
  getDatasetPkRelatedObjects404ApplicationJsonObject?: GetDatasetPkRelatedObjects404ApplicationJson;

  @Metadata()
  getDatasetPkRelatedObjects500ApplicationJsonObject?: GetDatasetPkRelatedObjects500ApplicationJson;

  @Metadata()
  statusCode: number;
}
