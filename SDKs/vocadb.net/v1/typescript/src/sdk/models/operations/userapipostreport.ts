import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiPostReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserApiPostReportRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createReportModel?: shared.CreateReportModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  createReportModel1?: shared.CreateReportModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createReportModel2?: shared.CreateReportModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UserApiPostReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiPostReportPathParams;

  @SpeakeasyMetadata()
  request: UserApiPostReportRequests;
}


export class UserApiPostReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userApiPostReport200ApplicationJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  userApiPostReport200ApplicationJsonpBoolean?: boolean;

  @SpeakeasyMetadata()
  userApiPostReport200TextJsonBoolean?: boolean;
}
