import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUserFollowsPeoplePersonIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=person_id" })
  personId: number;
}


export class PutUserFollowsPeoplePersonIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUserFollowsPeoplePersonIdPathParams;
}


export class PutUserFollowsPeoplePersonIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personFollow?: shared.PersonFollow;

  @Metadata()
  statusCode: number;
}
