import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DevelopersListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class DevelopersList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Developer })
  results: shared.Developer[];
}


export class DevelopersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DevelopersListQueryParams;
}


export class DevelopersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  developersList200ApplicationJsonObject?: DevelopersList200ApplicationJson;
}
