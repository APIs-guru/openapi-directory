import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDashboardPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteDashboardPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDashboardPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPk403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDashboardPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDashboardPkPathParams;

  @SpeakeasyMetadata()
  security: DeleteDashboardPkSecurity;
}


export class DeleteDashboardPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteDashboardPk200ApplicationJsonObject?: DeleteDashboardPk200ApplicationJson;

  @SpeakeasyMetadata()
  deleteDashboardPk401ApplicationJsonObject?: DeleteDashboardPk401ApplicationJson;

  @SpeakeasyMetadata()
  deleteDashboardPk403ApplicationJsonObject?: DeleteDashboardPk403ApplicationJson;

  @SpeakeasyMetadata()
  deleteDashboardPk404ApplicationJsonObject?: DeleteDashboardPk404ApplicationJson;

  @SpeakeasyMetadata()
  deleteDashboardPk422ApplicationJsonObject?: DeleteDashboardPk422ApplicationJson;

  @SpeakeasyMetadata()
  deleteDashboardPk500ApplicationJsonObject?: DeleteDashboardPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
