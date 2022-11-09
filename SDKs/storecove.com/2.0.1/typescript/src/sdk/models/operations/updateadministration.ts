import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAdministrationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;
}


export class UpdateAdministrationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAdministrationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class UpdateAdministrationResponse extends SpeakeasyBase {
  @Metadata()
  administration?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
