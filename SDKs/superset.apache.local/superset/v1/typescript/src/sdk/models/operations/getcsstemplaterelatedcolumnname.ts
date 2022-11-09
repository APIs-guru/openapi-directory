import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCssTemplateRelatedColumnNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetCssTemplateRelatedColumnNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetCssTemplateRelatedColumnNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetCssTemplateRelatedColumnNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCssTemplateRelatedColumnNamePathParams;

  @Metadata()
  queryParams: GetCssTemplateRelatedColumnNameQueryParams;

  @Metadata()
  security: GetCssTemplateRelatedColumnNameSecurity;
}


export class GetCssTemplateRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateRelatedColumnNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCssTemplateRelatedColumnName400ApplicationJsonObject?: GetCssTemplateRelatedColumnName400ApplicationJson;

  @Metadata()
  getCssTemplateRelatedColumnName401ApplicationJsonObject?: GetCssTemplateRelatedColumnName401ApplicationJson;

  @Metadata()
  getCssTemplateRelatedColumnName404ApplicationJsonObject?: GetCssTemplateRelatedColumnName404ApplicationJson;

  @Metadata()
  getCssTemplateRelatedColumnName500ApplicationJsonObject?: GetCssTemplateRelatedColumnName500ApplicationJson;

  @Metadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @Metadata()
  statusCode: number;
}
