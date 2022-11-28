import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetObservationsByCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetObservationsByCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetObservationsByCodePathParams;
}


export class GetObservationsByCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
