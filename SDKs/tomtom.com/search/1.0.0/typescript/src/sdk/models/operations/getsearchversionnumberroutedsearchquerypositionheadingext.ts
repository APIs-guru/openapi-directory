import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=heading" })
  heading: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" })
  extendedPostalCodesFor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idxSet" })
  idxSet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=multiplier" })
  multiplier?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routingTimeout" })
  routingTimeout?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=typeahead" })
  typeahead?: boolean;
}


export class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams;

  @Metadata()
  queryParams: GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams;
}


export class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
