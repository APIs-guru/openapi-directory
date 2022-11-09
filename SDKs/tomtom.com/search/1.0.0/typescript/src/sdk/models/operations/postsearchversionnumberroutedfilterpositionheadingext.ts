import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=heading" })
  heading: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=routingTimeout" })
  routingTimeout?: number;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=freeformAddress" })
  freeformAddress?: string;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lon" })
  lon?: number;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress;

  @Metadata({ data: "json, name=poi" })
  poi?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi;

  @Metadata({ data: "json, name=position" })
  position?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=poiList", elemType: operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList })
  poiList?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList[];
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams;

  @Metadata()
  queryParams: PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody;
}


export class PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
