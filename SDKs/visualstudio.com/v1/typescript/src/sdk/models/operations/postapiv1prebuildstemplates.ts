import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1PrebuildsTemplatesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createCloudEnvironmentBody?: shared.CreateCloudEnvironmentBody;

  @Metadata({ data: "request, media_type=application/json" })
  createCloudEnvironmentBody1?: shared.CreateCloudEnvironmentBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  createCloudEnvironmentBody2?: shared.CreateCloudEnvironmentBody;

  @Metadata({ data: "request, media_type=text/json" })
  createCloudEnvironmentBody3?: shared.CreateCloudEnvironmentBody;
}


export class PostApiV1PrebuildsTemplatesRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostApiV1PrebuildsTemplatesRequests;
}


export class PostApiV1PrebuildsTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @Metadata()
  contentType: string;

  @Metadata()
  messageCodes?: number;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
