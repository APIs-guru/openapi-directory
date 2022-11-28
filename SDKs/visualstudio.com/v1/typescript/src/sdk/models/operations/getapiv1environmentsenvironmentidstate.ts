import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiV1EnvironmentsEnvironmentIdStatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1EnvironmentsEnvironmentIdStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1EnvironmentsEnvironmentIdStatePathParams;
}


export class GetApiV1EnvironmentsEnvironmentIdStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
