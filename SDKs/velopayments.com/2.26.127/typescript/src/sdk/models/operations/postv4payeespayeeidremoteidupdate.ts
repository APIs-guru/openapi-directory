import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV4PayeesPayeeIdRemoteIdUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class PostV4PayeesPayeeIdRemoteIdUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV4PayeesPayeeIdRemoteIdUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateRemoteIdRequest2;
}


export class PostV4PayeesPayeeIdRemoteIdUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;

  @SpeakeasyMetadata()
  inlineResponse409?: any;
}
