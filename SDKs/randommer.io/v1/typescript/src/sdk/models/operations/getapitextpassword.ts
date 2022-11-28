import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiTextPasswordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasDigits" })
  hasDigits: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasSpecial" })
  hasSpecial: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasUppercase" })
  hasUppercase: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length: number;
}


export class GetApiTextPasswordHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiTextPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiTextPasswordQueryParams;

  @SpeakeasyMetadata()
  headers: GetApiTextPasswordHeaders;
}


export class GetApiTextPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
