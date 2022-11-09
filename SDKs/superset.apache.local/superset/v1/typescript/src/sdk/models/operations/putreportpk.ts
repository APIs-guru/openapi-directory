import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutReportPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutReportPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutReportPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutReportPkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ReportScheduleRestApiPut;

  @Metadata()
  security: PutReportPkSecurity;
}


export class PutReportPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.ReportScheduleRestApiPut;
}


export class PutReportPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutReportPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutReportPk403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutReportPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutReportPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutReportPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putReportPk200ApplicationJsonObject?: PutReportPk200ApplicationJson;

  @Metadata()
  putReportPk400ApplicationJsonObject?: PutReportPk400ApplicationJson;

  @Metadata()
  putReportPk401ApplicationJsonObject?: PutReportPk401ApplicationJson;

  @Metadata()
  putReportPk403ApplicationJsonObject?: PutReportPk403ApplicationJson;

  @Metadata()
  putReportPk404ApplicationJsonObject?: PutReportPk404ApplicationJson;

  @Metadata()
  putReportPk500ApplicationJsonObject?: PutReportPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
