import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutApiV1EnvironmentsEnvironmentIdPortsPortPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class PutApiV1EnvironmentsEnvironmentIdPortsPortRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  addForwardedPortSettings?: shared.AddForwardedPortSettings;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  addForwardedPortSettings1?: shared.AddForwardedPortSettings;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  addForwardedPortSettings2?: shared.AddForwardedPortSettings;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  addForwardedPortSettings3?: shared.AddForwardedPortSettings;
}


export class PutApiV1EnvironmentsEnvironmentIdPortsPortRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApiV1EnvironmentsEnvironmentIdPortsPortPathParams;

  @SpeakeasyMetadata()
  request?: PutApiV1EnvironmentsEnvironmentIdPortsPortRequests;
}


export class PutApiV1EnvironmentsEnvironmentIdPortsPortResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageCodes?: number;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
