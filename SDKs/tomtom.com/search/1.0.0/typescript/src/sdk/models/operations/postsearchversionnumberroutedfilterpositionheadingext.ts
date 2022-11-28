import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=heading" })
  heading: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routingTimeout" })
  routingTimeout?: number;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=freeformAddress" })
  freeformAddress?: string;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress;

  @SpeakeasyMetadata({ data: "json, name=poi" })
  poi?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=poiList", elemType: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList })
  poiList?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList[];
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams;

  @SpeakeasyMetadata()
  queryParams: PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
