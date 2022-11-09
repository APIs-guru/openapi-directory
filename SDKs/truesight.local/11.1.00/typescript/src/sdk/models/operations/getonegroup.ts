import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOneGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class GetOneGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOneGroupPathParams;
}


export class GetOneGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
