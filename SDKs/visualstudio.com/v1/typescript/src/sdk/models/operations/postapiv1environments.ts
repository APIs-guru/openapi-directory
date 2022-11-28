import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1EnvironmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access" })
  access?: boolean;
}


export class PostApiV1EnvironmentsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createCloudEnvironmentBody?: shared.CreateCloudEnvironmentBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createCloudEnvironmentBody1?: shared.CreateCloudEnvironmentBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  createCloudEnvironmentBody2?: shared.CreateCloudEnvironmentBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createCloudEnvironmentBody3?: shared.CreateCloudEnvironmentBody;
}


export class PostApiV1EnvironmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostApiV1EnvironmentsQueryParams;

  @SpeakeasyMetadata()
  request?: PostApiV1EnvironmentsRequests;
}


export class PostApiV1EnvironmentsResponse extends SpeakeasyBase {
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
