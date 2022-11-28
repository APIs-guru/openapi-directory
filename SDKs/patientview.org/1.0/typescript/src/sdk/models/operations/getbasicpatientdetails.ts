import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBasicPatientDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetBasicPatientDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBasicPatientDetailsPathParams;
}


export class GetBasicPatientDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
