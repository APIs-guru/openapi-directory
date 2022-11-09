import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAnnotationLayerPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteAnnotationLayerPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteAnnotationLayerPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAnnotationLayerPkPathParams;

  @Metadata()
  security: DeleteAnnotationLayerPkSecurity;
}


export class DeleteAnnotationLayerPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteAnnotationLayerPk200ApplicationJsonObject?: DeleteAnnotationLayerPk200ApplicationJson;

  @Metadata()
  deleteAnnotationLayerPk404ApplicationJsonObject?: DeleteAnnotationLayerPk404ApplicationJson;

  @Metadata()
  deleteAnnotationLayerPk422ApplicationJsonObject?: DeleteAnnotationLayerPk422ApplicationJson;

  @Metadata()
  deleteAnnotationLayerPk500ApplicationJsonObject?: DeleteAnnotationLayerPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
