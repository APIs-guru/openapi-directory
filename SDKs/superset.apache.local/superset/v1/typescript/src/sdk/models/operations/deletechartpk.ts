import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteChartPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteChartPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteChartPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteChartPkPathParams;

  @Metadata()
  security: DeleteChartPkSecurity;
}


export class DeleteChartPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPk403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteChartPk200ApplicationJsonObject?: DeleteChartPk200ApplicationJson;

  @Metadata()
  deleteChartPk401ApplicationJsonObject?: DeleteChartPk401ApplicationJson;

  @Metadata()
  deleteChartPk403ApplicationJsonObject?: DeleteChartPk403ApplicationJson;

  @Metadata()
  deleteChartPk404ApplicationJsonObject?: DeleteChartPk404ApplicationJson;

  @Metadata()
  deleteChartPk422ApplicationJsonObject?: DeleteChartPk422ApplicationJson;

  @Metadata()
  deleteChartPk500ApplicationJsonObject?: DeleteChartPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
