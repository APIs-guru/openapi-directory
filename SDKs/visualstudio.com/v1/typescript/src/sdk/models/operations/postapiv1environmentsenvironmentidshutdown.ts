import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1EnvironmentsEnvironmentIdShutdownPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class PostApiV1EnvironmentsEnvironmentIdShutdownRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostApiV1EnvironmentsEnvironmentIdShutdownPathParams;
}


export class PostApiV1EnvironmentsEnvironmentIdShutdownResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageCodes?: number;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
