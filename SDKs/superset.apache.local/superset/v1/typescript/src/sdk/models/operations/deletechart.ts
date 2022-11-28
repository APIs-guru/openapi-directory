import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteChartQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteChartSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteChart200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChart401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChart403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChart404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChart422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChart500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteChartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteChartQueryParams;

  @SpeakeasyMetadata()
  security: DeleteChartSecurity;
}


export class DeleteChartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteChart200ApplicationJsonObject?: DeleteChart200ApplicationJson;

  @SpeakeasyMetadata()
  deleteChart401ApplicationJsonObject?: DeleteChart401ApplicationJson;

  @SpeakeasyMetadata()
  deleteChart403ApplicationJsonObject?: DeleteChart403ApplicationJson;

  @SpeakeasyMetadata()
  deleteChart404ApplicationJsonObject?: DeleteChart404ApplicationJson;

  @SpeakeasyMetadata()
  deleteChart422ApplicationJsonObject?: DeleteChart422ApplicationJson;

  @SpeakeasyMetadata()
  deleteChart500ApplicationJsonObject?: DeleteChart500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
