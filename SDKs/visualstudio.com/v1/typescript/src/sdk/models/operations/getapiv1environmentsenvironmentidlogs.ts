import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiV1EnvironmentsEnvironmentIdLogsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetApiV1EnvironmentsEnvironmentIdLogsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1EnvironmentsEnvironmentIdLogsPathParams;
}


export class GetApiV1EnvironmentsEnvironmentIdLogsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getApiV1EnvironmentsEnvironmentIdLogs200ApplicationJsonString?: string;

  @Metadata()
  getApiV1EnvironmentsEnvironmentIdLogs200TextJsonString?: string;

  @Metadata()
  getApiV1EnvironmentsEnvironmentIdLogs200TextPlainString?: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
