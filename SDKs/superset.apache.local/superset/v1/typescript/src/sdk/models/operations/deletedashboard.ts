import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDashboardQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteDashboardSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDashboard200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboard401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboard403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboard404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboard422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboard500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteDashboardQueryParams;

  @SpeakeasyMetadata()
  security: DeleteDashboardSecurity;
}


export class DeleteDashboardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteDashboard200ApplicationJsonObject?: DeleteDashboard200ApplicationJson;

  @SpeakeasyMetadata()
  deleteDashboard401ApplicationJsonObject?: DeleteDashboard401ApplicationJson;

  @SpeakeasyMetadata()
  deleteDashboard403ApplicationJsonObject?: DeleteDashboard403ApplicationJson;

  @SpeakeasyMetadata()
  deleteDashboard404ApplicationJsonObject?: DeleteDashboard404ApplicationJson;

  @SpeakeasyMetadata()
  deleteDashboard422ApplicationJsonObject?: DeleteDashboard422ApplicationJson;

  @SpeakeasyMetadata()
  deleteDashboard500ApplicationJsonObject?: DeleteDashboard500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
