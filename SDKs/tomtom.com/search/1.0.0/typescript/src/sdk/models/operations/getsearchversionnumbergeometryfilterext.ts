import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchVersionNumberGeometryFilterExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberGeometryFilterExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=geometryList" })
  geometryList: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=poiList" })
  poiList: string;
}


export class GetSearchVersionNumberGeometryFilterExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSearchVersionNumberGeometryFilterExtPathParams;

  @Metadata()
  queryParams: GetSearchVersionNumberGeometryFilterExtQueryParams;
}


export class GetSearchVersionNumberGeometryFilterExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
