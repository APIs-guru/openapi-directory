import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdRegisteredInterestsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdRegisteredInterestsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdRegisteredInterestsPathParams;
}


export class GetApiMembersIdRegisteredInterestsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  registeredInterestCategoryListItem?: shared.RegisteredInterestCategoryListItem;

  @Metadata()
  statusCode: number;
}
