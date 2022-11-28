import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiMembersHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: number[];
}


export class GetApiMembersHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiMembersHistoryQueryParams;
}


export class GetApiMembersHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MemberHistoryItem })
  memberHistoryItems?: shared.MemberHistoryItem[];

  @SpeakeasyMetadata()
  statusCode: number;
}
