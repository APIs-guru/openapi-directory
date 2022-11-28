import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchVersionNumberGeometryFilterExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberGeometryFilterExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geometryList" })
  geometryList: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=poiList" })
  poiList: string;
}


export class GetSearchVersionNumberGeometryFilterExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchVersionNumberGeometryFilterExtPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchVersionNumberGeometryFilterExtQueryParams;
}


export class GetSearchVersionNumberGeometryFilterExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
