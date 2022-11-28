import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSearchVersionNumberGeometryFilterExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=vertices" })
  vertices?: string[];
}


export class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=freeformAddress" })
  freeformAddress?: string;
}


export class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;
}


export class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress;

  @SpeakeasyMetadata({ data: "json, name=poi" })
  poi?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition;
}


export class PostSearchVersionNumberGeometryFilterExtRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=geometryList", elemType: PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList })
  geometryList?: PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList[];

  @SpeakeasyMetadata({ data: "json, name=poiList", elemType: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList })
  poiList?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList[];
}


export class PostSearchVersionNumberGeometryFilterExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSearchVersionNumberGeometryFilterExtPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostSearchVersionNumberGeometryFilterExtRequestBody;
}


export class PostSearchVersionNumberGeometryFilterExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
