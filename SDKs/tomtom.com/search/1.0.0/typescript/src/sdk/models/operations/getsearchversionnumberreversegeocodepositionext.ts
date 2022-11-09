import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchVersionNumberReverseGeocodePositionExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=position" })
  position: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class GetSearchVersionNumberReverseGeocodePositionExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=heading" })
  heading?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=returnRoadUse" })
  returnRoadUse?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=returnSpeedLimit" })
  returnSpeedLimit?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roadUse" })
  roadUse?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=spatialKeys" })
  spatialKeys?: boolean;
}


export class GetSearchVersionNumberReverseGeocodePositionExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSearchVersionNumberReverseGeocodePositionExtPathParams;

  @Metadata()
  queryParams: GetSearchVersionNumberReverseGeocodePositionExtQueryParams;
}


export class GetSearchVersionNumberReverseGeocodePositionExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
