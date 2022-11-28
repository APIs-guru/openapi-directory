import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service" })
  service?: string;
}


export class GetProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProfileQueryParams;
}


export class GetProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
