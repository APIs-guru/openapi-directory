import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUserFollowsPeopleEmbedEnum {
    Person = "person"
}


export class GetUserFollowsPeopleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserFollowsPeopleEmbedEnum;
}


export class GetUserFollowsPeopleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserFollowsPeopleQueryParams;
}


export class GetUserFollowsPeopleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PersonFollow })
  personFollows?: shared.PersonFollow[];

  @Metadata()
  statusCode: number;
}
