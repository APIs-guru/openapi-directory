import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResourcesApiGetListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cultureCode" })
  cultureCode: string;
}


export class ResourcesApiGetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=setNames" })
  setNames: string[];
}


export class ResourcesApiGetListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResourcesApiGetListPathParams;

  @Metadata()
  queryParams: ResourcesApiGetListQueryParams;
}


export class ResourcesApiGetListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourcesApiGetList200ApplicationJsonObject?: Map<string, Map<string, string>>;

  @Metadata()
  resourcesApiGetList200TextJsonObject?: Map<string, Map<string, string>>;

  @Metadata()
  statusCode: number;
}
