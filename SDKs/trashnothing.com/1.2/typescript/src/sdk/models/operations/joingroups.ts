import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JoinGroupsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=group_ids" })
  groupIds: string;
}


export class JoinGroupsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: JoinGroupsRequestBody;
}


export class JoinGroups200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: shared.Group })
  groups?: shared.Group[];

  @Metadata({ data: "json, name=over_group_limit" })
  overGroupLimit?: boolean;
}


export class JoinGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  joinGroups200ApplicationJsonObject?: JoinGroups200ApplicationJson;
}
