import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;
}


export class GetGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGroupsQueryParams;
}


export class GetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Group })
  groups?: shared.Group[];

  @SpeakeasyMetadata()
  statusCode: number;
}
