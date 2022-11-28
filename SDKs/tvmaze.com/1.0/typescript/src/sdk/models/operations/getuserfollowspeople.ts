import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUserFollowsPeopleEmbedEnum {
    Person = "person"
}


export class GetUserFollowsPeopleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserFollowsPeopleEmbedEnum;
}


export class GetUserFollowsPeopleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserFollowsPeopleQueryParams;
}


export class GetUserFollowsPeopleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PersonFollow })
  personFollows?: shared.PersonFollow[];

  @SpeakeasyMetadata()
  statusCode: number;
}
