import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBasicUserInformationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetBasicUserInformationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBasicUserInformationPathParams;
}


export class GetBasicUserInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
