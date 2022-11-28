import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiV1EnvironmentsEnvironmentIdLogsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1EnvironmentsEnvironmentIdLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1EnvironmentsEnvironmentIdLogsPathParams;
}


export class GetApiV1EnvironmentsEnvironmentIdLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getApiV1EnvironmentsEnvironmentIdLogs200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  getApiV1EnvironmentsEnvironmentIdLogs200TextJsonString?: string;

  @SpeakeasyMetadata()
  getApiV1EnvironmentsEnvironmentIdLogs200TextPlainString?: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
