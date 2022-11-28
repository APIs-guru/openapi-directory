import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteChartPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteChartPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteChartPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPk403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteChartPkPathParams;

  @SpeakeasyMetadata()
  security: DeleteChartPkSecurity;
}


export class DeleteChartPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteChartPk200ApplicationJsonObject?: DeleteChartPk200ApplicationJson;

  @SpeakeasyMetadata()
  deleteChartPk401ApplicationJsonObject?: DeleteChartPk401ApplicationJson;

  @SpeakeasyMetadata()
  deleteChartPk403ApplicationJsonObject?: DeleteChartPk403ApplicationJson;

  @SpeakeasyMetadata()
  deleteChartPk404ApplicationJsonObject?: DeleteChartPk404ApplicationJson;

  @SpeakeasyMetadata()
  deleteChartPk422ApplicationJsonObject?: DeleteChartPk422ApplicationJson;

  @SpeakeasyMetadata()
  deleteChartPk500ApplicationJsonObject?: DeleteChartPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
