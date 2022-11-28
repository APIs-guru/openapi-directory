import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1EnvironmentsEnvironmentIdStartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PostApiV1EnvironmentsEnvironmentIdStartQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access" })
  access?: boolean;
}


export class PostApiV1EnvironmentsEnvironmentIdStartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostApiV1EnvironmentsEnvironmentIdStartPathParams;

  @SpeakeasyMetadata()
  queryParams: PostApiV1EnvironmentsEnvironmentIdStartQueryParams;
}


export class PostApiV1EnvironmentsEnvironmentIdStartResponse extends SpeakeasyBase {
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
