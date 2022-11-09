import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiPostReportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserApiPostReportRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  createReportModel?: shared.CreateReportModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  createReportModel1?: shared.CreateReportModel;

  @Metadata({ data: "request, media_type=text/json" })
  createReportModel2?: shared.CreateReportModel;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UserApiPostReportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiPostReportPathParams;

  @Metadata()
  request: UserApiPostReportRequests;
}


export class UserApiPostReportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userApiPostReport200ApplicationJsonBoolean?: boolean;

  @Metadata()
  userApiPostReport200ApplicationJsonpBoolean?: boolean;

  @Metadata()
  userApiPostReport200TextJsonBoolean?: boolean;
}
