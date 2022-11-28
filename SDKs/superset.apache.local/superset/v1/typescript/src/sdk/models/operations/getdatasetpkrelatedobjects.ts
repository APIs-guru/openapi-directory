import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatasetPkRelatedObjectsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDatasetPkRelatedObjectsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetPkRelatedObjects401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPkRelatedObjects404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPkRelatedObjects500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetPkRelatedObjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatasetPkRelatedObjectsPathParams;

  @SpeakeasyMetadata()
  security: GetDatasetPkRelatedObjectsSecurity;
}


export class GetDatasetPkRelatedObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  datasetRelatedObjectsResponse?: shared.DatasetRelatedObjectsResponse;

  @SpeakeasyMetadata()
  getDatasetPkRelatedObjects401ApplicationJsonObject?: GetDatasetPkRelatedObjects401ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetPkRelatedObjects404ApplicationJsonObject?: GetDatasetPkRelatedObjects404ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetPkRelatedObjects500ApplicationJsonObject?: GetDatasetPkRelatedObjects500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
