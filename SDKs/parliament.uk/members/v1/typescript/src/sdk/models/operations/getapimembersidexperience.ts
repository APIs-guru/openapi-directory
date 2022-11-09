import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdExperiencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdExperienceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdExperiencePathParams;
}


export class GetApiMembersIdExperienceResponse extends SpeakeasyBase {
  @Metadata()
  biographyExperienceListItem?: shared.BiographyExperienceListItem;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
