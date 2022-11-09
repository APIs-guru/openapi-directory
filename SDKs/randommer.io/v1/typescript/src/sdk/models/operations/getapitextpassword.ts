import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiTextPasswordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=hasDigits" })
  hasDigits: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasSpecial" })
  hasSpecial: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasUppercase" })
  hasUppercase: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length: number;
}


export class GetApiTextPasswordHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiTextPasswordRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiTextPasswordQueryParams;

  @Metadata()
  headers: GetApiTextPasswordHeaders;
}


export class GetApiTextPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
