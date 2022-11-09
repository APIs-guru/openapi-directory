import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1EnvironmentsEnvironmentIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PostApiV1EnvironmentsEnvironmentIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostApiV1EnvironmentsEnvironmentIdArchivePathParams;
}


export class PostApiV1EnvironmentsEnvironmentIdArchiveResponse extends SpeakeasyBase {
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
