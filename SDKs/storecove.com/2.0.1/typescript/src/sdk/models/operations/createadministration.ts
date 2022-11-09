import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAdministrationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;
}


export class CreateAdministrationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAdministrationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateAdministrationResponse extends SpeakeasyBase {
  @Metadata()
  administration?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModels?: any[];

  @Metadata()
  statusCode: number;
}
