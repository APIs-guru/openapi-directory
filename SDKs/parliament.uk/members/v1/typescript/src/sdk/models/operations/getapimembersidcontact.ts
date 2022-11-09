import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdContactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdContactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdContactPathParams;
}


export class GetApiMembersIdContactResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contactInformationListItem?: shared.ContactInformationListItem;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
