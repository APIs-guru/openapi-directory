import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteReportPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteReportPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteReportPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteReportPkPathParams;

  @Metadata()
  security: DeleteReportPkSecurity;
}


export class DeleteReportPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportPk403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteReportPk200ApplicationJsonObject?: DeleteReportPk200ApplicationJson;

  @Metadata()
  deleteReportPk403ApplicationJsonObject?: DeleteReportPk403ApplicationJson;

  @Metadata()
  deleteReportPk404ApplicationJsonObject?: DeleteReportPk404ApplicationJson;

  @Metadata()
  deleteReportPk422ApplicationJsonObject?: DeleteReportPk422ApplicationJson;

  @Metadata()
  deleteReportPk500ApplicationJsonObject?: DeleteReportPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
