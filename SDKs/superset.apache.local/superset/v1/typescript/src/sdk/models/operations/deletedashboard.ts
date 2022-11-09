import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDashboardQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteDashboardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDashboardRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteDashboardQueryParams;

  @Metadata()
  security: DeleteDashboardSecurity;
}


export class DeleteDashboard200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboard401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboard403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboard404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboard422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboard500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDashboard200ApplicationJsonObject?: DeleteDashboard200ApplicationJson;

  @Metadata()
  deleteDashboard401ApplicationJsonObject?: DeleteDashboard401ApplicationJson;

  @Metadata()
  deleteDashboard403ApplicationJsonObject?: DeleteDashboard403ApplicationJson;

  @Metadata()
  deleteDashboard404ApplicationJsonObject?: DeleteDashboard404ApplicationJson;

  @Metadata()
  deleteDashboard422ApplicationJsonObject?: DeleteDashboard422ApplicationJson;

  @Metadata()
  deleteDashboard500ApplicationJsonObject?: DeleteDashboard500ApplicationJson;

  @Metadata()
  statusCode: number;
}
