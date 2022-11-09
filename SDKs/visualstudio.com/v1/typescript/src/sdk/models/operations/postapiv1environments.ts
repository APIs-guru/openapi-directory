import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1EnvironmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=access" })
  access?: boolean;
}


export class PostApiV1EnvironmentsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createCloudEnvironmentBody?: shared.CreateCloudEnvironmentBody;

  @Metadata({ data: "request, media_type=application/json" })
  createCloudEnvironmentBody1?: shared.CreateCloudEnvironmentBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  createCloudEnvironmentBody2?: shared.CreateCloudEnvironmentBody;

  @Metadata({ data: "request, media_type=text/json" })
  createCloudEnvironmentBody3?: shared.CreateCloudEnvironmentBody;
}


export class PostApiV1EnvironmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostApiV1EnvironmentsQueryParams;

  @Metadata()
  request?: PostApiV1EnvironmentsRequests;
}


export class PostApiV1EnvironmentsResponse extends SpeakeasyBase {
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
