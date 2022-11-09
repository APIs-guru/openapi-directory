import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1EnvironmentsEnvironmentIdStartPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PostApiV1EnvironmentsEnvironmentIdStartQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=access" })
  access?: boolean;
}


export class PostApiV1EnvironmentsEnvironmentIdStartRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostApiV1EnvironmentsEnvironmentIdStartPathParams;

  @Metadata()
  queryParams: PostApiV1EnvironmentsEnvironmentIdStartQueryParams;
}


export class PostApiV1EnvironmentsEnvironmentIdStartResponse extends SpeakeasyBase {
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
