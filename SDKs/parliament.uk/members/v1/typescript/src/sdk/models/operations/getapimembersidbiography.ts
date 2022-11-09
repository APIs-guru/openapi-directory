import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdBiographyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdBiographyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdBiographyPathParams;
}


export class GetApiMembersIdBiographyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  memberBiographyItem?: shared.MemberBiographyItem;

  @Metadata()
  statusCode: number;
}
