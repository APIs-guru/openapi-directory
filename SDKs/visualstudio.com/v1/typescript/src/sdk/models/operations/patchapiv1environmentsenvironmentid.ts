import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchApiV1EnvironmentsEnvironmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PatchApiV1EnvironmentsEnvironmentIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updateCloudEnvironmentBody?: shared.UpdateCloudEnvironmentBody;

  @Metadata({ data: "request, media_type=application/json" })
  updateCloudEnvironmentBody1?: shared.UpdateCloudEnvironmentBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  updateCloudEnvironmentBody2?: shared.UpdateCloudEnvironmentBody;

  @Metadata({ data: "request, media_type=text/json" })
  updateCloudEnvironmentBody3?: shared.UpdateCloudEnvironmentBody;
}


export class PatchApiV1EnvironmentsEnvironmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchApiV1EnvironmentsEnvironmentIdPathParams;

  @Metadata()
  request?: PatchApiV1EnvironmentsEnvironmentIdRequests;
}


export class PatchApiV1EnvironmentsEnvironmentIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @Metadata()
  contentType: string;

  @Metadata()
  messageCodes?: number[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
