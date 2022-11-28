import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResourcesApiGetListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cultureCode" })
  cultureCode: string;
}


export class ResourcesApiGetListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setNames" })
  setNames: string[];
}


export class ResourcesApiGetListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResourcesApiGetListPathParams;

  @SpeakeasyMetadata()
  queryParams: ResourcesApiGetListQueryParams;
}


export class ResourcesApiGetListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourcesApiGetList200ApplicationJsonObject?: Map<string, Map<string, string>>;

  @SpeakeasyMetadata()
  resourcesApiGetList200TextJsonObject?: Map<string, Map<string, string>>;

  @SpeakeasyMetadata()
  statusCode: number;
}
