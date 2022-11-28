import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1EnvironmentsEnvironmentIdUpdatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1EnvironmentsEnvironmentIdUpdatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1EnvironmentsEnvironmentIdUpdatesPathParams;
}


export class GetApiV1EnvironmentsEnvironmentIdUpdatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
