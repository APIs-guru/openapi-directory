import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchVersionNumberGeometrySearchQueryExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberGeometrySearchQueryExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" })
  extendedPostalCodesFor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geometryList" })
  geometryList?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idxSet" })
  idxSet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetSearchVersionNumberGeometrySearchQueryExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchVersionNumberGeometrySearchQueryExtPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchVersionNumberGeometrySearchQueryExtQueryParams;
}


export class GetSearchVersionNumberGeometrySearchQueryExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
