import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterForRealtimeApiDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RegisterForRealtimeApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegisterForRealtimeApiDeletePathParams;
}


export class RegisterForRealtimeApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
