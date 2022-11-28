import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAnnotationLayerPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteAnnotationLayerPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteAnnotationLayerPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAnnotationLayerPkPathParams;

  @SpeakeasyMetadata()
  security: DeleteAnnotationLayerPkSecurity;
}


export class DeleteAnnotationLayerPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPk200ApplicationJsonObject?: DeleteAnnotationLayerPk200ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPk404ApplicationJsonObject?: DeleteAnnotationLayerPk404ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPk422ApplicationJsonObject?: DeleteAnnotationLayerPk422ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPk500ApplicationJsonObject?: DeleteAnnotationLayerPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
