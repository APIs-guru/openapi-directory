import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupsByIdsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=group_ids" })
  groupIds: string;
}


export class GetGroupsByIdsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class GetGroupsByIdsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class GetGroupsByIdsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetGroupsByIdsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetGroupsByIdsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetGroupsByIdsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetGroupsByIdsSecurityOption3;
}


export class GetGroupsByIdsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGroupsByIdsQueryParams;

  @Metadata()
  security: GetGroupsByIdsSecurity;
}


export class GetGroupsByIdsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Group })
  groups?: shared.Group[];

  @Metadata()
  statusCode: number;
}
