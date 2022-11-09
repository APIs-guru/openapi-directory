import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=service" })
  service?: string;
}


export class GetProfileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetProfileQueryParams;
}


export class GetProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
