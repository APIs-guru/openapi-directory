import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JoinGroupsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=group_ids" })
  groupIds: string;
}


export class JoinGroups200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group })
  groups?: shared.Group[];

  @SpeakeasyMetadata({ data: "json, name=over_group_limit" })
  overGroupLimit?: boolean;
}


export class JoinGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: JoinGroupsRequestBody;
}


export class JoinGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  joinGroups200ApplicationJsonObject?: JoinGroups200ApplicationJson;
}
