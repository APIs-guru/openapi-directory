import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchApiV1EnvironmentsEnvironmentIdRestorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PatchApiV1EnvironmentsEnvironmentIdRestoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchApiV1EnvironmentsEnvironmentIdRestorePathParams;
}


export class PatchApiV1EnvironmentsEnvironmentIdRestoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
