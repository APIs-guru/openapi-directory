import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDashboardPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteDashboardPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDashboardPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDashboardPkPathParams;

  @Metadata()
  security: DeleteDashboardPkSecurity;
}


export class DeleteDashboardPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPk403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDashboardPk200ApplicationJsonObject?: DeleteDashboardPk200ApplicationJson;

  @Metadata()
  deleteDashboardPk401ApplicationJsonObject?: DeleteDashboardPk401ApplicationJson;

  @Metadata()
  deleteDashboardPk403ApplicationJsonObject?: DeleteDashboardPk403ApplicationJson;

  @Metadata()
  deleteDashboardPk404ApplicationJsonObject?: DeleteDashboardPk404ApplicationJson;

  @Metadata()
  deleteDashboardPk422ApplicationJsonObject?: DeleteDashboardPk422ApplicationJson;

  @Metadata()
  deleteDashboardPk500ApplicationJsonObject?: DeleteDashboardPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
