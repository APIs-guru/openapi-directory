import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteReportPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteReportPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteReportPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportPk403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteReportPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteReportPkPathParams;

  @SpeakeasyMetadata()
  security: DeleteReportPkSecurity;
}


export class DeleteReportPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteReportPk200ApplicationJsonObject?: DeleteReportPk200ApplicationJson;

  @SpeakeasyMetadata()
  deleteReportPk403ApplicationJsonObject?: DeleteReportPk403ApplicationJson;

  @SpeakeasyMetadata()
  deleteReportPk404ApplicationJsonObject?: DeleteReportPk404ApplicationJson;

  @SpeakeasyMetadata()
  deleteReportPk422ApplicationJsonObject?: DeleteReportPk422ApplicationJson;

  @SpeakeasyMetadata()
  deleteReportPk500ApplicationJsonObject?: DeleteReportPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
