import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetObservationsByCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=code" })
  code: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetObservationsByCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetObservationsByCodePathParams;
}


export class GetObservationsByCodeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
