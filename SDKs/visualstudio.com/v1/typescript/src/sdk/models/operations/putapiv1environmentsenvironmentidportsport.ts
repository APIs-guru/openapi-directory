import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutApiV1EnvironmentsEnvironmentIdPortsPortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class PutApiV1EnvironmentsEnvironmentIdPortsPortRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  addForwardedPortSettings?: shared.AddForwardedPortSettings;

  @Metadata({ data: "request, media_type=application/json" })
  addForwardedPortSettings1?: shared.AddForwardedPortSettings;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  addForwardedPortSettings2?: shared.AddForwardedPortSettings;

  @Metadata({ data: "request, media_type=text/json" })
  addForwardedPortSettings3?: shared.AddForwardedPortSettings;
}


export class PutApiV1EnvironmentsEnvironmentIdPortsPortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutApiV1EnvironmentsEnvironmentIdPortsPortPathParams;

  @Metadata()
  request?: PutApiV1EnvironmentsEnvironmentIdPortsPortRequests;
}


export class PutApiV1EnvironmentsEnvironmentIdPortsPortResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  messageCodes?: number;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
