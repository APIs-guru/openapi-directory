import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=heading" })
  heading: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=poiList" })
  poiList: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routingTimeout" })
  routingTimeout?: number;
}


export class GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams;
}


export class GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
