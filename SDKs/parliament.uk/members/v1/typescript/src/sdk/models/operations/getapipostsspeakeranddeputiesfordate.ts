import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiPostsSpeakerAndDeputiesForDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=forDate" })
  forDate: Date;
}


export class GetApiPostsSpeakerAndDeputiesForDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiPostsSpeakerAndDeputiesForDatePathParams;
}


export class GetApiPostsSpeakerAndDeputiesForDateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MemberItem })
  memberItems?: shared.MemberItem[];

  @Metadata()
  statusCode: number;
}
