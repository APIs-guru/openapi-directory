import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCssTemplateRelatedColumnNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetCssTemplateRelatedColumnNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetCssTemplateRelatedColumnNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetCssTemplateRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateRelatedColumnNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCssTemplateRelatedColumnNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetCssTemplateRelatedColumnNameQueryParams;

  @SpeakeasyMetadata()
  security: GetCssTemplateRelatedColumnNameSecurity;
}


export class GetCssTemplateRelatedColumnNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCssTemplateRelatedColumnName400ApplicationJsonObject?: GetCssTemplateRelatedColumnName400ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplateRelatedColumnName401ApplicationJsonObject?: GetCssTemplateRelatedColumnName401ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplateRelatedColumnName404ApplicationJsonObject?: GetCssTemplateRelatedColumnName404ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplateRelatedColumnName500ApplicationJsonObject?: GetCssTemplateRelatedColumnName500ApplicationJson;

  @SpeakeasyMetadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
