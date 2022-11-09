import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTemplateModelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DtoDataType" })
  dtoDataType: string;
}


export class GetTemplateModelHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetTemplateModelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTemplateModelPathParams;

  @Metadata()
  headers: GetTemplateModelHeaders;
}


export class GetTemplateModelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getTemplateModel200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
