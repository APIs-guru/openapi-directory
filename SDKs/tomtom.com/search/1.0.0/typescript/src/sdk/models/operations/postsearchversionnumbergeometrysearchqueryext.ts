import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSearchVersionNumberGeometrySearchQueryExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class PostSearchVersionNumberGeometrySearchQueryExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" })
  extendedPostalCodesFor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idxSet" })
  idxSet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=vertices" })
  vertices?: string[];
}


export class PostSearchVersionNumberGeometrySearchQueryExtRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=geometryList", elemType: PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList })
  geometryList?: PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList[];
}


export class PostSearchVersionNumberGeometrySearchQueryExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSearchVersionNumberGeometrySearchQueryExtPathParams;

  @SpeakeasyMetadata()
  queryParams: PostSearchVersionNumberGeometrySearchQueryExtQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostSearchVersionNumberGeometrySearchQueryExtRequestBody;
}


export class PostSearchVersionNumberGeometrySearchQueryExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
