import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOneGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class GetOneGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOneGroupPathParams;
}


export class GetOneGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
