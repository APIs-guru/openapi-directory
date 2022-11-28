import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDatasetPkMetricMetricIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metric_id" })
  metricId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteDatasetPkMetricMetricIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDatasetPkMetricMetricId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricId422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDatasetPkMetricMetricIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteDatasetPkMetricMetricIdSecurity;
}


export class DeleteDatasetPkMetricMetricIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteDatasetPkMetricMetricId200ApplicationJsonObject?: DeleteDatasetPkMetricMetricId200ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPkMetricMetricId401ApplicationJsonObject?: DeleteDatasetPkMetricMetricId401ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPkMetricMetricId403ApplicationJsonObject?: DeleteDatasetPkMetricMetricId403ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPkMetricMetricId404ApplicationJsonObject?: DeleteDatasetPkMetricMetricId404ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPkMetricMetricId422ApplicationJsonObject?: DeleteDatasetPkMetricMetricId422ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatasetPkMetricMetricId500ApplicationJsonObject?: DeleteDatasetPkMetricMetricId500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
