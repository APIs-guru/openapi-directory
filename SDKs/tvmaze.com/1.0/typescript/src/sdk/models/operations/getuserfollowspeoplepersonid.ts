import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserFollowsPeoplePersonIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=person_id" })
  personId: number;
}


export class GetUserFollowsPeoplePersonIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserFollowsPeoplePersonIdPathParams;
}


export class GetUserFollowsPeoplePersonIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personFollow?: shared.PersonFollow;

  @Metadata()
  statusCode: number;
}
