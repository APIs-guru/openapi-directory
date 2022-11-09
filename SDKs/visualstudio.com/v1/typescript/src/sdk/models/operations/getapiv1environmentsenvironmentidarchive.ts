import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1EnvironmentsEnvironmentIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1EnvironmentsEnvironmentIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1EnvironmentsEnvironmentIdArchivePathParams;
}


export class GetApiV1EnvironmentsEnvironmentIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  messageCodes?: number;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  unfilteredCloudEnvironmentResult?: shared.UnfilteredCloudEnvironmentResult;
}
