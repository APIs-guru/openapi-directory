import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAnnotationLayerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteAnnotationLayerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteAnnotationLayerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteAnnotationLayerQueryParams;

  @Metadata()
  security: DeleteAnnotationLayerSecurity;
}


export class DeleteAnnotationLayer200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayer422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteAnnotationLayer200ApplicationJsonObject?: DeleteAnnotationLayer200ApplicationJson;

  @Metadata()
  deleteAnnotationLayer401ApplicationJsonObject?: DeleteAnnotationLayer401ApplicationJson;

  @Metadata()
  deleteAnnotationLayer404ApplicationJsonObject?: DeleteAnnotationLayer404ApplicationJson;

  @Metadata()
  deleteAnnotationLayer422ApplicationJsonObject?: DeleteAnnotationLayer422ApplicationJson;

  @Metadata()
  deleteAnnotationLayer500ApplicationJsonObject?: DeleteAnnotationLayer500ApplicationJson;

  @Metadata()
  statusCode: number;
}
