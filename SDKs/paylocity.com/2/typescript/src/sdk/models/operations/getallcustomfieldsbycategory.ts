import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllCustomFieldsByCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetAllCustomFieldsByCategorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetAllCustomFieldsByCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllCustomFieldsByCategoryPathParams;

  @SpeakeasyMetadata()
  security: GetAllCustomFieldsByCategorySecurity;
}


export class GetAllCustomFieldsByCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.CustomFieldDefinition })
  customFieldDefinitions?: shared.CustomFieldDefinition[];

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
