import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteChartQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteChartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteChartRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteChartQueryParams;

  @Metadata()
  security: DeleteChartSecurity;
}


export class DeleteChart200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChart401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChart403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChart404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChart422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChart500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteChart200ApplicationJsonObject?: DeleteChart200ApplicationJson;

  @Metadata()
  deleteChart401ApplicationJsonObject?: DeleteChart401ApplicationJson;

  @Metadata()
  deleteChart403ApplicationJsonObject?: DeleteChart403ApplicationJson;

  @Metadata()
  deleteChart404ApplicationJsonObject?: DeleteChart404ApplicationJson;

  @Metadata()
  deleteChart422ApplicationJsonObject?: DeleteChart422ApplicationJson;

  @Metadata()
  deleteChart500ApplicationJsonObject?: DeleteChart500ApplicationJson;

  @Metadata()
  statusCode: number;
}
