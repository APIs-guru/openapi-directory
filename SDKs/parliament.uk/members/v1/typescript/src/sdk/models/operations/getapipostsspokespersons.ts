import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiPostsSpokespersonsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=partyId" })
  partyId?: number;
}


export class GetApiPostsSpokespersonsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiPostsSpokespersonsQueryParams;
}


export class GetApiPostsSpokespersonsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GovernmentOppositionPostItem })
  governmentOppositionPostItems?: shared.GovernmentOppositionPostItem[];

  @Metadata()
  statusCode: number;
}
