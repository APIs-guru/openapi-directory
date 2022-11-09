import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchVersionNumberNearbySearchExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberNearbySearchExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=btmRight" })
  btmRight?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=countrySet" })
  countrySet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" })
  extendedPostalCodesFor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=idxSet" })
  idxSet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxFuzzyLevel" })
  maxFuzzyLevel?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minFuzzyLevel" })
  minFuzzyLevel?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ofs" })
  ofs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=topLeft" })
  topLeft?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: shared.ViewEnum;
}


export class GetSearchVersionNumberNearbySearchExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSearchVersionNumberNearbySearchExtPathParams;

  @Metadata()
  queryParams: GetSearchVersionNumberNearbySearchExtQueryParams;
}


export class GetSearchVersionNumberNearbySearchExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
