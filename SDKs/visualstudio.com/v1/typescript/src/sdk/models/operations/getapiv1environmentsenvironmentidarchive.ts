import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1EnvironmentsEnvironmentIdArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1EnvironmentsEnvironmentIdArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1EnvironmentsEnvironmentIdArchivePathParams;
}


export class GetApiV1EnvironmentsEnvironmentIdArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageCodes?: number;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unfilteredCloudEnvironmentResult?: shared.UnfilteredCloudEnvironmentResult;
}
