import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterForRealtimeApiDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RegisterForRealtimeApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegisterForRealtimeApiDeletePathParams;
}


export class RegisterForRealtimeApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
