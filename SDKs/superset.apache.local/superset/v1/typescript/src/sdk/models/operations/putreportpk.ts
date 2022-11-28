import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutReportPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutReportPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutReportPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.ReportScheduleRestApiPut;
}


export class PutReportPk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutReportPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutReportPk403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutReportPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutReportPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutReportPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutReportPkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReportScheduleRestApiPut;

  @SpeakeasyMetadata()
  security: PutReportPkSecurity;
}


export class PutReportPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putReportPk200ApplicationJsonObject?: PutReportPk200ApplicationJson;

  @SpeakeasyMetadata()
  putReportPk400ApplicationJsonObject?: PutReportPk400ApplicationJson;

  @SpeakeasyMetadata()
  putReportPk401ApplicationJsonObject?: PutReportPk401ApplicationJson;

  @SpeakeasyMetadata()
  putReportPk403ApplicationJsonObject?: PutReportPk403ApplicationJson;

  @SpeakeasyMetadata()
  putReportPk404ApplicationJsonObject?: PutReportPk404ApplicationJson;

  @SpeakeasyMetadata()
  putReportPk500ApplicationJsonObject?: PutReportPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
