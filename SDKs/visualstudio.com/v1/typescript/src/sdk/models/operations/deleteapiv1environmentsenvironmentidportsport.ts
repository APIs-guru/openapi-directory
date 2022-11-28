import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApiV1EnvironmentsEnvironmentIdPortsPortPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class DeleteApiV1EnvironmentsEnvironmentIdPortsPortRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApiV1EnvironmentsEnvironmentIdPortsPortPathParams;
}


export class DeleteApiV1EnvironmentsEnvironmentIdPortsPortResponse extends SpeakeasyBase {
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
}
