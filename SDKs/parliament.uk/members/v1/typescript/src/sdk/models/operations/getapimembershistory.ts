import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: number[];
}


export class GetApiMembersHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiMembersHistoryQueryParams;
}


export class GetApiMembersHistoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MemberHistoryItem })
  memberHistoryItems?: shared.MemberHistoryItem[];

  @Metadata()
  statusCode: number;
}
