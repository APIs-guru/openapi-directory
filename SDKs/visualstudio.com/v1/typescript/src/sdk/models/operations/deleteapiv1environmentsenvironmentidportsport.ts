import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApiV1EnvironmentsEnvironmentIdPortsPortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class DeleteApiV1EnvironmentsEnvironmentIdPortsPortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteApiV1EnvironmentsEnvironmentIdPortsPortPathParams;
}


export class DeleteApiV1EnvironmentsEnvironmentIdPortsPortResponse extends SpeakeasyBase {
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
}
