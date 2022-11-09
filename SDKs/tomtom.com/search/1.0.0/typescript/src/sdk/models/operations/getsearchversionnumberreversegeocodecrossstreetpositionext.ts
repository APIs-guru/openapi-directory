import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=heading" })
  heading?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=spatialKeys" })
  spatialKeys?: boolean;
}


export class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams;

  @Metadata()
  queryParams: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams;
}


export class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
