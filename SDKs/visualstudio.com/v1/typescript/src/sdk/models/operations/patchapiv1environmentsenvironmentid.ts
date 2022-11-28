import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchApiV1EnvironmentsEnvironmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PatchApiV1EnvironmentsEnvironmentIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updateCloudEnvironmentBody?: shared.UpdateCloudEnvironmentBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateCloudEnvironmentBody1?: shared.UpdateCloudEnvironmentBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  updateCloudEnvironmentBody2?: shared.UpdateCloudEnvironmentBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateCloudEnvironmentBody3?: shared.UpdateCloudEnvironmentBody;
}


export class PatchApiV1EnvironmentsEnvironmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchApiV1EnvironmentsEnvironmentIdPathParams;

  @SpeakeasyMetadata()
  request?: PatchApiV1EnvironmentsEnvironmentIdRequests;
}


export class PatchApiV1EnvironmentsEnvironmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageCodes?: number[];

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
