import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LogOutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class LogOutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LogOutPathParams;
}


export class LogOutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
