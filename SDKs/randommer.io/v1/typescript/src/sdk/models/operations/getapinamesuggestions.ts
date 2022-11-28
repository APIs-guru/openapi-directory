import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiNameSuggestionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingWords" })
  startingWords: string;
}


export class GetApiNameSuggestionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiNameSuggestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiNameSuggestionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetApiNameSuggestionsHeaders;
}


export class GetApiNameSuggestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
