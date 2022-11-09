import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LogOutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class LogOutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LogOutPathParams;
}


export class LogOutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
