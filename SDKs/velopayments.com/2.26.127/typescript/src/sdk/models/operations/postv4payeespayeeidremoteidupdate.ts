import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV4PayeesPayeeIdRemoteIdUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payeeId" })
  payeeId: string;
}


export class PostV4PayeesPayeeIdRemoteIdUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostV4PayeesPayeeIdRemoteIdUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateRemoteIdRequest2;
}


export class PostV4PayeesPayeeIdRemoteIdUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;

  @Metadata()
  inlineResponse409?: any;
}
