import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPatientEnteredObservationsByCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetPatientEnteredObservationsByCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPatientEnteredObservationsByCodePathParams;
}


export class GetPatientEnteredObservationsByCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
