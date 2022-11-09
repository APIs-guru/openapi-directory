import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiNameSuggestionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=startingWords" })
  startingWords: string;
}


export class GetApiNameSuggestionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiNameSuggestionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiNameSuggestionsQueryParams;

  @Metadata()
  headers: GetApiNameSuggestionsHeaders;
}


export class GetApiNameSuggestionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
