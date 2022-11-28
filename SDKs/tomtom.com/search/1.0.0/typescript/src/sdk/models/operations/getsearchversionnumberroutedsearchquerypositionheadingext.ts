import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=heading" })
  heading: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" })
  extendedPostalCodesFor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idxSet" })
  idxSet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=multiplier" })
  multiplier?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routingTimeout" })
  routingTimeout?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=typeahead" })
  typeahead?: boolean;
}


export class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams;
}


export class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
