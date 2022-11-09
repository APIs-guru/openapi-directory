import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=heading" })
  heading: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=poiList" })
  poiList: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routingTimeout" })
  routingTimeout?: number;
}


export class GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams;

  @Metadata()
  queryParams: GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams;
}


export class GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
