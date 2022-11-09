import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientEnteredObservationsByCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=code" })
  code: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetPatientEnteredObservationsByCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientEnteredObservationsByCodePathParams;
}


export class GetPatientEnteredObservationsByCodeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
