import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchVersionNumberNearbySearchExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberNearbySearchExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=btmRight" })
  btmRight?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countrySet" })
  countrySet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extendedPostalCodesFor" })
  extendedPostalCodesFor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idxSet" })
  idxSet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxFuzzyLevel" })
  maxFuzzyLevel?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minFuzzyLevel" })
  minFuzzyLevel?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ofs" })
  ofs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topLeft" })
  topLeft?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: shared.ViewEnum;
}


export class GetSearchVersionNumberNearbySearchExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchVersionNumberNearbySearchExtPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchVersionNumberNearbySearchExtQueryParams;
}


export class GetSearchVersionNumberNearbySearchExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
