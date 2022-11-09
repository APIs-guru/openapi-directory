import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchApiV1EnvironmentsEnvironmentIdRestorePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PatchApiV1EnvironmentsEnvironmentIdRestoreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchApiV1EnvironmentsEnvironmentIdRestorePathParams;
}


export class PatchApiV1EnvironmentsEnvironmentIdRestoreResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
