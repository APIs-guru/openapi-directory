import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserFollowsPeoplePersonIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=person_id" })
  personId: number;
}


export class DeleteUserFollowsPeoplePersonIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserFollowsPeoplePersonIdPathParams;
}


export class DeleteUserFollowsPeoplePersonIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
