import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllCustomFieldsByCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetAllCustomFieldsByCategorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetAllCustomFieldsByCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllCustomFieldsByCategoryPathParams;

  @Metadata()
  security: GetAllCustomFieldsByCategorySecurity;
}


export class GetAllCustomFieldsByCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.CustomFieldDefinition })
  customFieldDefinitions?: shared.CustomFieldDefinition[];

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
