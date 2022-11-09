import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBasicUserInformationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetBasicUserInformationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBasicUserInformationPathParams;
}


export class GetBasicUserInformationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
