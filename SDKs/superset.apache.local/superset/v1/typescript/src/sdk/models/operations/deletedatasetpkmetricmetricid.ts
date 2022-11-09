import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDatasetPkMetricMetricIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=metric_id" })
  metricId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteDatasetPkMetricMetricIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDatasetPkMetricMetricIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDatasetPkMetricMetricIdPathParams;

  @Metadata()
  security: DeleteDatasetPkMetricMetricIdSecurity;
}


export class DeleteDatasetPkMetricMetricId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricId403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricId422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatasetPkMetricMetricIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDatasetPkMetricMetricId200ApplicationJsonObject?: DeleteDatasetPkMetricMetricId200ApplicationJson;

  @Metadata()
  deleteDatasetPkMetricMetricId401ApplicationJsonObject?: DeleteDatasetPkMetricMetricId401ApplicationJson;

  @Metadata()
  deleteDatasetPkMetricMetricId403ApplicationJsonObject?: DeleteDatasetPkMetricMetricId403ApplicationJson;

  @Metadata()
  deleteDatasetPkMetricMetricId404ApplicationJsonObject?: DeleteDatasetPkMetricMetricId404ApplicationJson;

  @Metadata()
  deleteDatasetPkMetricMetricId422ApplicationJsonObject?: DeleteDatasetPkMetricMetricId422ApplicationJson;

  @Metadata()
  deleteDatasetPkMetricMetricId500ApplicationJsonObject?: DeleteDatasetPkMetricMetricId500ApplicationJson;

  @Metadata()
  statusCode: number;
}
