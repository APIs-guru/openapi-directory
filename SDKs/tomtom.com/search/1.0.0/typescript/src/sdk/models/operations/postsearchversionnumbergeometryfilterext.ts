import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSearchVersionNumberGeometryFilterExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList extends SpeakeasyBase {
  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=radius" })
  radius?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=vertices" })
  vertices?: string[];
}


export class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=freeformAddress" })
  freeformAddress?: string;
}


export class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lon" })
  lon?: number;
}


export class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress;

  @Metadata({ data: "json, name=poi" })
  poi?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi;

  @Metadata({ data: "json, name=position" })
  position?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition;
}


export class PostSearchVersionNumberGeometryFilterExtRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=geometryList", elemType: operations.PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList })
  geometryList?: PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList[];

  @Metadata({ data: "json, name=poiList", elemType: operations.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList })
  poiList?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList[];
}


export class PostSearchVersionNumberGeometryFilterExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSearchVersionNumberGeometryFilterExtPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostSearchVersionNumberGeometryFilterExtRequestBody;
}


export class PostSearchVersionNumberGeometryFilterExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
