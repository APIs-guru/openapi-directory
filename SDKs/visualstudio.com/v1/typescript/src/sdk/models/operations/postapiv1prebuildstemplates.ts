import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1PrebuildsTemplatesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createCloudEnvironmentBody?: shared.CreateCloudEnvironmentBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createCloudEnvironmentBody1?: shared.CreateCloudEnvironmentBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  createCloudEnvironmentBody2?: shared.CreateCloudEnvironmentBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createCloudEnvironmentBody3?: shared.CreateCloudEnvironmentBody;
}


export class PostApiV1PrebuildsTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostApiV1PrebuildsTemplatesRequests;
}


export class PostApiV1PrebuildsTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageCodes?: number;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
