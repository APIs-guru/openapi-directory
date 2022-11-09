import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBasicPatientDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetBasicPatientDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBasicPatientDetailsPathParams;
}


export class GetBasicPatientDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
