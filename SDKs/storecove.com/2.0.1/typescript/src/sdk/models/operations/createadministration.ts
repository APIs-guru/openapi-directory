import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAdministrationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=legal_entity_id" })
  legalEntityId: number;
}


export class CreateAdministrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAdministrationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateAdministrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  administration?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModels?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
