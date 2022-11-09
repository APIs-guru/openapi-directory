import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApiV1EnvironmentsEnvironmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class DeleteApiV1EnvironmentsEnvironmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApiV1EnvironmentsEnvironmentIdPathParams;
}


export class DeleteApiV1EnvironmentsEnvironmentIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
