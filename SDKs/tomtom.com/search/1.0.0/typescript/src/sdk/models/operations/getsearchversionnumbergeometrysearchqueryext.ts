import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchVersionNumberGeometrySearchQueryExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberGeometrySearchQueryExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" })
  extendedPostalCodesFor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=geometryList" })
  geometryList?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idxSet" })
  idxSet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetSearchVersionNumberGeometrySearchQueryExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSearchVersionNumberGeometrySearchQueryExtPathParams;

  @Metadata()
  queryParams: GetSearchVersionNumberGeometrySearchQueryExtQueryParams;
}


export class GetSearchVersionNumberGeometrySearchQueryExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
