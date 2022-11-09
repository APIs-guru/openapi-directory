import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1EnvironmentsEnvironmentIdExportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PostApiV1EnvironmentsEnvironmentIdExportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostApiV1EnvironmentsEnvironmentIdExportPathParams;
}


export class PostApiV1EnvironmentsEnvironmentIdExportResponse extends SpeakeasyBase {
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
