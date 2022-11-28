import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAnnotationLayerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteAnnotationLayerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteAnnotationLayer200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayer422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayer500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteAnnotationLayerQueryParams;

  @SpeakeasyMetadata()
  security: DeleteAnnotationLayerSecurity;
}


export class DeleteAnnotationLayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteAnnotationLayer200ApplicationJsonObject?: DeleteAnnotationLayer200ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayer401ApplicationJsonObject?: DeleteAnnotationLayer401ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayer404ApplicationJsonObject?: DeleteAnnotationLayer404ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayer422ApplicationJsonObject?: DeleteAnnotationLayer422ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayer500ApplicationJsonObject?: DeleteAnnotationLayer500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
