import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiPostsSpeakerAndDeputiesForDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=forDate" })
  forDate: Date;
}


export class GetApiPostsSpeakerAndDeputiesForDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiPostsSpeakerAndDeputiesForDatePathParams;
}


export class GetApiPostsSpeakerAndDeputiesForDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MemberItem })
  memberItems?: shared.MemberItem[];

  @SpeakeasyMetadata()
  statusCode: number;
}
