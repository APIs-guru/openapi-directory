import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchVersionNumberCategorySearchQueryExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberCategorySearchQueryExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=btmRight" })
  btmRight?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countrySet" })
  countrySet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" })
  extendedPostalCodesFor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ofs" })
  ofs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topLeft" })
  topLeft?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=typeahead" })
  typeahead?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: shared.ViewEnum;
}


export class GetSearchVersionNumberCategorySearchQueryExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchVersionNumberCategorySearchQueryExtPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchVersionNumberCategorySearchQueryExtQueryParams;
}


export class GetSearchVersionNumberCategorySearchQueryExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
