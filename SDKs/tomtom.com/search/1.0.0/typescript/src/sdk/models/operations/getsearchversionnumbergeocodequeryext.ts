import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchVersionNumberGeocodeQueryExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberGeocodeQueryExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=btmRight" })
  btmRight?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=countrySet" })
  countrySet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" })
  extendedPostalCodesFor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ofs" })
  ofs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=storeResult" })
  storeResult?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=topLeft" })
  topLeft?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=typeahead" })
  typeahead?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: shared.ViewEnum;
}


export class GetSearchVersionNumberGeocodeQueryExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSearchVersionNumberGeocodeQueryExtPathParams;

  @Metadata()
  queryParams: GetSearchVersionNumberGeocodeQueryExtQueryParams;
}


export class GetSearchVersionNumberGeocodeQueryExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
