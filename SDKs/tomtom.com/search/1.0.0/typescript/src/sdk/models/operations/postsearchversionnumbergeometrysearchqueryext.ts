import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSearchVersionNumberGeometrySearchQueryExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class PostSearchVersionNumberGeometrySearchQueryExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" })
  extendedPostalCodesFor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idxSet" })
  idxSet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList extends SpeakeasyBase {
  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=radius" })
  radius?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=vertices" })
  vertices?: string[];
}


export class PostSearchVersionNumberGeometrySearchQueryExtRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=geometryList", elemType: operations.PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList })
  geometryList?: PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList[];
}


export class PostSearchVersionNumberGeometrySearchQueryExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSearchVersionNumberGeometrySearchQueryExtPathParams;

  @Metadata()
  queryParams: PostSearchVersionNumberGeometrySearchQueryExtQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostSearchVersionNumberGeometrySearchQueryExtRequestBody;
}


export class PostSearchVersionNumberGeometrySearchQueryExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
