import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiPostsSpokespersonsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partyId" })
  partyId?: number;
}


export class GetApiPostsSpokespersonsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiPostsSpokespersonsQueryParams;
}


export class GetApiPostsSpokespersonsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GovernmentOppositionPostItem })
  governmentOppositionPostItems?: shared.GovernmentOppositionPostItem[];

  @SpeakeasyMetadata()
  statusCode: number;
}
